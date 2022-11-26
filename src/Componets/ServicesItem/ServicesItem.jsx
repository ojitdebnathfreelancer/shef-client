import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesItem = ({ services }) => {
    const { discription, img, price, rating, serviceName, _id } = services;
    // console.log(services);
    return (
        <div>
            <div className='flex lg:flex-row flex-col items-center bg-slate-100 my-4 p-5 rounded-lg drop-shadow-lg'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='lg:w-80 h-40 lg:h-72 rounded-[20px]' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div className='ml-3'>
                    <h2 className='text-2xl font-bold capitalize'>{serviceName}</h2>
                    <p className='first-letter:capitalize'>{discription.slice(0, 150)}<span>.........</span> </p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold'>Rating: {rating}</p>
                    <div className='text-center'>
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-active btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;