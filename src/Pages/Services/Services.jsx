import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ServicesItem from '../../Componets/ServicesItem/ServicesItem';
import useTitle from '../../useTitle/useTitle';
import './Services.css';

const Services = () => {
    const { loading, setLoading } = useContext(AuthContext);
    useTitle("Services");
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const pages = Math.ceil(count / size);

    if(services.length > 0){
        setLoading(false);
    };

    useEffect(() => {
        fetch(`https://shafe-server.vercel.app/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setCount(data.count);
            })
    }, [page, size]);

    return (
        <div>
            {
                loading ?
                    <p className='text-center text-3xl font-bold'>Loading...</p>
                    :
                    <div>
                        {
                            services.map(servies => <ServicesItem key={servies._id} services={servies}></ServicesItem>)
                        }
                        <div className='text-center mb-2 pagination'>
                            {
                                [...Array(pages).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={page === number ? "selected" : ''}>{number + 1}</button>)
                            }
                            <select onChange={(e) => setSize(e.target.value)}>
                                <option value="2">2</option>
                                <option value="5" selected>5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Services;