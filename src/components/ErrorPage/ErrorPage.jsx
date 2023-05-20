import { Link } from 'react-router-dom';
import './ErrorPage.css'
import useTitle from '../../routes/Hooks/useTitle';

const ErrorPage = () => {
    useTitle('Toy Tour | Error 404')
    return (
        <div className='error-bg'>
        <div className='container p-5 mx-auto'>
        <div className="px-5">
            <div className='col-12 col-md-6 mx-auto'>
            <img className="img-fluid mx-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-7684573-6209367.png" alt="" />
            </div>
        </div>
        <div className='col-12 col-md-6 mx-auto'>
        <h1 className='text-center'>Sorry!</h1>
        <h2 className='text-center'>Page Not Exists</h2>
        <p className='text-center'>Back to <Link className='text-success fs-3' to="/">Home</Link> </p>
        </div>
        </div>
        </div>
    );
};

export default ErrorPage;