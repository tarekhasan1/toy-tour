import { Table, Button, Container } from 'react-bootstrap';
import './MyToys.css'
import useTitle from '../../routes/Hooks/useTitle';

const MyToys = () => {
  useTitle('Toy Tour | My Toys')
  const toyData = [
    {
      id: 1,
      name: 'Car Toy 1',
      description: 'A fun and fast car toy',
      price: '$19.99',
      quantity: 10,
      ratings: 4.5
    },
    {
      id: 2,
      name: 'Car Toy 2',
      description: 'An interactive car toy with lights and sounds',
      price: '$24.99',
      quantity: 5,
      ratings: 3.8
    },
    // Add more toy data as needed
  ];

  const handleDelete = (id) => {
    // Handle delete functionality here
    console.log(`Deleting toy with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Handle update functionality here
    console.log(`Updating toy with id: ${id}`);
  };

  return (
    <Container className='my-5 filler-height'>
    <h1 className='text-center mt-5'>Toys Added by Tarek Hasan</h1>
    <p className='text-center text-secondary mb-5'>Email: tarekhasan101@gmail.com</p>
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Ratings</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {toyData.map((toy) => (
          <tr key={toy.id}>
            <td>{toy.name}</td>
            <td>{toy.description}</td>
            <td>{toy.price}</td>
            <td>{toy.quantity}</td>
            <td>{toy.ratings}</td>
            <td>
              <Button variant="primary" onClick={() => handleUpdate(toy.id)}>Update</Button>
            </td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(toy.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default MyToys;
