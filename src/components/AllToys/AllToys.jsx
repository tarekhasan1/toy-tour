import { Container, Table } from 'react-bootstrap';
import useTitle from '../../routes/Hooks/useTitle';

const AllToys = () => {
  useTitle('Toy Tour | All Toys')
  const toysData = [
    { id: 1, name: 'Teddy Bear', seller: 'Toy World', category: 'Stuffed Animals', price: 19.99, quantity: 10, details: 'Soft and cuddly teddy bear.' },
    { id: 2, name: 'LEGO Set', seller: 'Brick Emporium', category: 'Building Blocks', price: 49.99, quantity: 5, details: 'Build your own creations with LEGO blocks.' },
    { id: 3, name: 'Barbie Doll', seller: 'Toy Paradise', category: 'Dolls', price: 14.99, quantity: 8, details: 'Fashionable Barbie doll with accessories.' },
    { id: 4, name: 'Remote Control Car', seller: 'RC Land', category: 'RC Vehicles', price: 29.99, quantity: 3, details: 'Control the car with a remote.' },
    { id: 5, name: 'Puzzle Game', seller: 'Brain Teasers Inc.', category: 'Brain Teasers', price: 9.99, quantity: 12, details: 'Challenge your mind with puzzles.' },
    { id: 6, name: 'Board Game', seller: 'Family Fun Games', category: 'Family Games', price: 24.99, quantity: 6, details: 'Enjoy playing board games with family and friends.' },
  ];

  return (
    <div className="table-responsive">
    <h1 className='text-center my-5'>All Amazing 4 Wheelers!</h1>
      <Container>
      <Table responsive>
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
        <tbody>
          {toysData.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.name}</td>
              <td>{toy.seller}</td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td><button title='click to view details' className='btn btn-outline-success'><i className="fa-solid fa-circle-info fs-2"></i></button> </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </div>
  );
};

export default AllToys;
