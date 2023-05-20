import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import useTitle from '../../routes/Hooks/useTitle';

const AddToy = () => {
  useTitle('Toy Tour | Add Toy')
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to submit the form data to the server or perform any other actions

    // Clear form fields
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setCategory('');
  };

  return (
    <Container className='my-5'>
    <h1 className='text-center my-5'>Add Toy as a Seller!</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mt-3' controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
        className='bg-dark'
          type="text"
          placeholder="Enter toy name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
        className='bg-dark'
          as="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
        <option className='text-secondary' value="">Select a category</option>
          <option className='text-success' value="Cars">Cars</option>
          <option className='text-secondary' value="Trucks">Trucks</option>
          <option className='text-success' value="Motorcycles">Motorcycles</option>
          <option className='text-secondary' value="Others">Others</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className='mt-3' controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
        className='bg-dark'
          as="textarea"
          rows={3}
          placeholder="Enter toy description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
        className='bg-dark'
          type="text"
          placeholder="Enter toy price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
        className='bg-dark'
          type="text"
          placeholder="Enter toy image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Button className='mt-3' variant="danger" type="submit">
        Add Toy
      </Button>
    </Form>
    </Container>
  );
};

export default AddToy;
