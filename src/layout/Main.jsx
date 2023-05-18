import { Outlet } from "react-router-dom";
import './Main.css'

const Main = () => {
    return (
        <div className="background-layer">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;