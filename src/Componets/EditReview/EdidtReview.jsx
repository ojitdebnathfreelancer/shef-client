import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../useTitle/useTitle';

const EdidtReview = () => {
    useTitle("Update Review")
    const editReviw = useLoaderData();
    const { review, serviesName, _id } = editReviw;

    const updateText = (e) => {
        e.preventDefault();
        const text = e.target.text.value;

        fetch(`https://shafe-server.vercel.app/updatereview/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Update Successfull', {
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
    };


    return (
        <div className='px-3 my-5'>
            <ToastContainer/>
            <div className='mx-auto w-80'>
                <p className='text-2xl text-center font-bold'>{serviesName}</p>
                <p className='text-xl text-center'>Edit Your Review Text</p>
                <form onSubmit={updateText}>
                    <textarea className="textarea textarea-bordered w-full h-40 resize-none mt-2" placeholder="Write your update reviw" name='text' defaultValue={review}></textarea>
                    <div className='text-center mt-2'>
                        <button className="btn btn-active btn-primary" type='sumit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EdidtReview;