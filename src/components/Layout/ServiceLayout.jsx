
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const ServiceLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default ServiceLayout;