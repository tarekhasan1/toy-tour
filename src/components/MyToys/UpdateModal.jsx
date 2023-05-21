/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

const UpdateModal = ({ carId, setShowModal, setShowToast, setData, data }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        price: "",
        availableQuantity: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            setLoading(true);
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_API}/update-car/${carId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...formData }),
                }
            );
            const result = await response.json();

            if (!result.error) {
                setShowToast(result.message);
                setLoading(false);
                setShowModal(false);
                const existingData = data.filter((car) => car._id !== carId);
                const updatedData = {
                    ...data.find((car) => car._id === carId),
                    ...formData,
                };
                setData([updatedData, ...existingData]);
                setTimeout(() => {
                    setShowToast(false);
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setShowModal(false);
            setShowToast("something broke");
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }
        setFormData({
            price: "",
            availableQuantity: "",
            description: "",
        });
    };

    return (
        <div className="bg-dark m-0">
            <Modal show={true} size="lg">
                <div className="text-end pe-4 bg-dark">
                    <span
                        onClick={() => setShowModal(false)}
                        className=" text-danger p-1 fs-2 fw-bold"
                        style={{ cursor: "pointer" }}
                    >
                        X
                    </span>
                </div>
                <Modal.Header className="bg-dark pt-2 rounded-0">
                    <Modal.Title className="fs-2">Update Car Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="price">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter price"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="availableQuantity">
                            <Form.Label>Available Quantity:</Form.Label>
                            <Form.Control
                                type="text"
                                name="availableQuantity"
                                value={formData.availableQuantity}
                                onChange={handleChange}
                                placeholder="Quantity"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter description"
                                required
                            />
                        </Form.Group>
                        <Button
                            className="mt-3"
                            variant="success"
                            type="submit"
                        >
                            {loading ? <Spinner /> : "Update now"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateModal;
