import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row, Spinner, Table, Toast } from 'react-bootstrap';
import useTitle from '../../routes/Hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const AllToys = () => {
  useTitle('Toy Tour | All Toys');
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_API}/cars`);
        const result = await response.json();
        setCars(result);
        setFilteredCars(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    loadData();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    const results = cars.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(results);
  };

  const handleDetails = (id) => {
    if (!user) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate(`/all-toys/${id}`, { replace: true });
      }, 2000);
    } else {
      navigate(`/all-toys/${id}`);
    }
  };

  return (
    <div className="table-responsive">
      {showToast && (
        <Toast className="notify-toast">
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="fw-bold fs-3">
            You have to log in first to view details!
          </Toast.Body>
        </Toast>
      )}
      <h1 className="text-center my-5">All Amazing 4 Wheeler Toys!</h1>
      <Container>
        <Row>
          <Col sm={10} md={6} className="mx-auto">
            <Form className="mb-5" inline>
              <FormControl
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button className="mt-3" variant="danger" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Table responsive>
          {loading ? (
            <p className="text-center">
              <Spinner />
            </p>
          ) : (
            <thead>
              <tr>
                <th>Name</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
          )}
          <tbody>
            {filteredCars.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.name}</td>
                <td>{toy.seller}</td>
                <td>{toy.category}</td>
                <td>${toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <button
                    onClick={() => handleDetails(toy._id)}
                    title="click to view details"
                    className="btn btn-outline-success"
                  >
                    <i className="fa-solid fa-circle-info fs-2"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllToys;
