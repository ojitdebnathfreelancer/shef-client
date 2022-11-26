import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesItem from '../ServicesItem/ServicesItem';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shafe-server.vercel.app/homeservices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='my-4 px-3 lg:px-0'>
            <p className='text-center text-3xl font-bold mb-2'>My Services</p>
            {
                services.map(servies => <ServicesItem key={servies._id} services={servies}></ServicesItem>)
            }
            <div className='text-center'>
                <Link to="/services">
                    <button className="btn btn-primary">More Services</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;