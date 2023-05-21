import { Container, Table } from 'react-bootstrap';
import useTitle from '../../routes/Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  useTitle('Toy Tour | All Toys');

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="table-responsive">
    <h1 className='text-center my-5'>All Amazing 4 Wheeler Toys!</h1>
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
          {data.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.name}</td>
              <td>{toy.seller}</td>
              <td>{toy.category}</td>
              <td>${toy.price}</td>
              <td>{toy.availableQuantity
              }</td>
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
