import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import ReviewTd from './ReviewTd';
import { ToastContainer, toast } from 'react-toastify';

const MyReview = () => {
    useTitle("My Reviews");
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    const [loadeData, setLoadData] = useState(false);

    useEffect(() => {
        fetch(`https://shafe-server.vercel.app/myreviews?email=${user.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user.email, loadeData]);
    // reviews data loaded 

    const reviewDelete = (id) => {
        const confirm = window.confirm('Are you want to delete');
        if (confirm) {
            fetch(`https://shafe-server.vercel.app/delete/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setLoadData(!loadeData);
                        toast.success('Delete Successfull', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                });
        }
    };
    // review deleted 

    const reviewDeleteAll = () => {
        const confirm = window.confirm('Are you want to delete all');
        if (confirm) {
            fetch(`https://shafe-server.vercel.app/allreviewdelete?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setLoadData(!loadeData);
                        toast.success('Delete All Successfull', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                });
        }
    };
    // all review deleted 

    return (
        <div>
            <ToastContainer />
            {
                reviews.length === 0 ? <p className='text-4xl text-center font-bold text-blue-900 my-5'>You have 0 review</p>
                    :
                    <div className="overflow-x-auto w-full my-4">
                        <p className='text-3xl font-bold text-center underline mb-3'>You have {reviews.length} reviews</p>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <button onClick={reviewDeleteAll} className="btn btn-active btn-primary">Delete All</button>
                                    </th>
                                    <th>Your Info</th>
                                    <th>Your Reviews</th>
                                    <th>Servies Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewTd key={review._id} reviews={review} reviewDelete={reviewDelete}></ReviewTd>)
                                }
                            </tbody>

                        </table>
                    </div>
            }
        </div>
    );
};

export default MyReview;