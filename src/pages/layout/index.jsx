import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const AccountLayout = () => {
    return (
        <div>
            <NavBar />
            <main>
                <div className="mx-auto max-w-7xl py-6 px-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AccountLayout;