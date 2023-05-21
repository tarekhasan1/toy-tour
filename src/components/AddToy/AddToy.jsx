import { useContext, useState } from 'react';
import { Form, Button, Container, Toast, Spinner } from 'react-bootstrap';
import useTitle from '../../routes/Hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import './AddToy.css'

const AddToy = () => {
  useTitle('Toy Tour | Add Toy');
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
          `${import.meta.env.VITE_SERVER_API}/create-car`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  category: category,
                  name: name,
                  image: image,
                  description: description,
                  seller: user.displayName,
                  price: price,
                  rating: rating,
                  email: user.email,
                  availableQuantity: quantity,
                  isAvailable: true
              }),
          }
      );
      const data = await response.json();
      setShowNotify(data.message);
      setLoading(false);
      setTimeout(() => {
          setShowNotify(false);
      }, 3000);
  } catch (error) {
      console.log(error);
      setLoading(false);
  }

    // Clear form fields
    setName('');
    setDescription('');
    setPrice('');
    setRating('');
    setQuantity('');
    setImage('');
    setCategory('');
  };

  return (
    <Container className='my-5'>
    {showNotify && (
      <Toast className="notify-toast bg-success">
          <Toast.Header className='bg-success'>
              <strong className="me-auto text-secondary text-center">Notification:</strong>
          </Toast.Header>
          <Toast.Body className="fw-bold bg-success fs-3 text-dark">
              {showNotify}
          </Toast.Body>
      </Toast>
  )}
    <h1 className='text-center my-5'>Add Toy as a Seller!</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mt-3' controlId="formUserName">
        <Form.Label>Name</Form.Label>
        <Form.Control
        className='bg-secondary'
          type="text"
          placeholder="Enter toy name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
        className='bg-secondary'
          as="select"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        >
        <option className='text-dark' value="">Select a category</option>
          <option className='text-dark' value="Sports Cars">Sports Cars</option>
          <option className='text-dark' value="Classic">Classic</option>
          <option className='text-dark' value="Off-Road">Off-Road</option>
          <option className='text-dark' value="Others">Others</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className='mt-3' controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
        className='bg-secondary'
          as="textarea"
          rows={3}
          placeholder="Enter toy description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
        className='bg-secondary'
          type="number"
          placeholder="Enter toy price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
        className='bg-secondary'
          type="number"
          placeholder="Enter toy rating"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mt-3' controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
        className='bg-secondary'
          type="number"
          placeholder="Enter toy quantity"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
        className='bg-secondary'
          type="text"
          placeholder="Enter toy image URL"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Button className='mt-3' variant="danger" type="submit">
      {loading ? <Spinner /> : "Add Toy"}
      </Button>
    </Form>
    </Container>
  );
};

export default AddToy;
