import { Table, Button, Container } from 'react-bootstrap';
import './MyToys.css'
import useTitle from '../../routes/Hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyToys = () => {
  useTitle('Toy Tour | My Toys');
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const loadData = async()=>{
      try{
        const loadedData = await fetch(`${import.meta.env.VITE_SERVER_API}/user-cars/${user.email}`)
      const data = await loadedData.json();
      setData(data);
      setLoading(false);
      }
      catch(error){
        console.log(error);
        setLoading(false);
      }
    };
    loadData();
  },[])


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
    <h1 className='text-center mt-5'>Hello! {user.displayName}, Your Added Toys!</h1>
    <p className='text-center text-secondary mb-5'>Email: {user.email}</p>
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
        {!loading && Array.isArray(data) && data.map((toy) => (
          <tr key={toy._id}>
            <td>{toy.name}</td>
            <td>{toy.description}</td>
            <td>{toy.price}</td>
            <td>{toy.availableQuantity}</td>
            <td>{toy.rating}</td>
            <td>
              <Button variant="primary" onClick={() => handleUpdate(toy._id)}>Update</Button>
            </td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(toy._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default MyToys;
