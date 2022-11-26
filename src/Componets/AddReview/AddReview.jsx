import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const AddReview = ({ reviewItme }) => {

    const { user } = useContext(AuthContext);

    const handelReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.review.value;

        if (user) {
            reviewItme(text);
            form.reset();
        }
        else{
            toast.warning('Please login before add review', {
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

    };

    return (
        <div>
            <ToastContainer/>
            <form onSubmit={handelReview}>
                <div className='lg:flex items-center'>
                    <textarea className="textarea textarea-primary resize-none w-80"
                        name='review'
                        required
                        placeholder="Say something about servies"></textarea>
                    <button className="btn btn-active btn-primary lg:ml-3">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;