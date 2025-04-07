import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthenticationPage = () => {
    
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    
                        <Navbar></Navbar>
                    
                </header>
                <main className="mx-2  mt-7 space-y-7">
                    
                        <Outlet></Outlet>
                    
                    
                </main>
                
            </div>
        </div>
    );
};

export default AuthenticationPage;