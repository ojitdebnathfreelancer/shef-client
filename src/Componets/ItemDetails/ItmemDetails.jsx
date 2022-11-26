import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ItmemDetails = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    const Time = new Date();
    const date = Time.getDate();
    const month = Time.getMonth();
    const year = Time.getFullYear();
    const currentTime = date + '/' + month + '/' + year;

    const servies = useLoaderData();
    const { discription, img, price, rating, serviceName, _id } = servies;
    // console.log(servies);
    const [reviews, setReviews] = useState([]);
    const [dataLoader, setDataLoader] = useState(false);

    reviews.sort((a, b) => a.sortTime - b.sortTime).reverse();

    useEffect(() => {
        fetch(`https://shafe-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id, dataLoader]);

    const reviewItme = (text) => {

        const newReview = {
            userName: user.displayName,
            userEmail: user.email,
            userPhoto: user.photoURL,
            review: text,
            sortTime: new Date().getTime(),
            serviesName: serviceName,
            serviesId: _id,
            time:currentTime
        };

        fetch('https://shafe-server.vercel.app/addreview', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDataLoader(!dataLoader);
                }
            });
    };
    // review add funtion 

    return (
        <div>
            <div className='px-3'>
                <div className='flex flex-col items-center bg-slate-100 my-4 p-5 rounded-lg drop-shadow-lg'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='lg:w-80 h-40 lg:h-72 rounded-[10px]'src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                    <div className='ml-3 text-center'>
                        <h2 className='text-2xl font-bold'>{serviceName}</h2>
                        <p className='font-bold'>Price: ${price}</p>
                        <p className='font-bold'>Rating: {rating}</p>
                        <p className='text-justify lg:px-52 px-0'>{discription}</p>
                    </div>
                </div>
            </div>
            <div className='px-3 mb-3'>
                <h2 className='text-3xl font-bold mb-5'>Consumers Reviews</h2>
                <div className='mx-auto max-w-md '>
                    <AddReview reviewItme={reviewItme}></AddReview>
                    {
                        reviews.map(review => <Review key={review._id} reviews={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ItmemDetails;