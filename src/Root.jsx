import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="roboto-font">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;