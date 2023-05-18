import { Outlet } from "react-router-dom";
import './Main.css'
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div className="background-layer">
        <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;