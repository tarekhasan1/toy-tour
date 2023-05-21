import { Outlet, useNavigation } from "react-router-dom";
import './Main.css'
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Spinner } from "react-bootstrap";

const Main = () => {
    const navigation = useNavigation();
    
    return (
        <div id='main-frame' className="background-layer">
        <NavigationBar></NavigationBar>
        {
            navigation.state === "loading" ?
            <div className="d-flex vh-100 justify-content-center align-items-center"><Spinner></Spinner></div> : <Outlet></Outlet>
        }
            <Footer></Footer>
        </div>
    );
};

export default Main;