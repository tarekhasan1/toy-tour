import { Table, Button, Container, Toast } from 'react-bootstrap';
import './MyToys.css'
import useTitle from '../../routes/Hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import UpdateModal from './UpdateModal';

const MyToys = () => {
  useTitle('Toy Tour | My Toys');
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [carId, setCarId] = useState("");

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
  },[user.email])


  const handleDelete = (id) => {
    const proceed = confirm('Are you sure you want to delete?');
    if(proceed){
      fetch(`${import.meta.env.VITE_SERVER_API}/delete-car/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if(result.message){
          alert('Deleted Successful');
          const remaining = data.filter(d => d._id !== id);
          setData(remaining);
        }
      })
    }
    console.log(`Deleting toy with id: ${id}`);
  };

  return (
    <Container className='my-5 filler-height'>
    {showToast && (
      <Toast className="notify-toast">
          <Toast.Header>
              <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="fw-bold fs-3 text-dark">
              {showToast}
          </Toast.Body>
      </Toast>
  )}
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
              <Button variant="primary" onClick={() => {
                setShowModal(true);
                setCarId(toy._id);
            }}>Update</Button>
            </td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(toy._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {showModal && (
      <UpdateModal
          setShowModal={setShowModal}
          carId={carId}
          setShowToast={setShowToast}
          setData={setData}
          data={data}
      />
  )}
    </Container>
  );
};

export default MyToys;
