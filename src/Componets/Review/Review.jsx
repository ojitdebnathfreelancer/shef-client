import React from 'react';

const Review = ({ reviews }) => {
    const { review, userEmail, userName, userPhoto } = reviews;


    return (
        <div className='my-3 bg-slate-100 drop-shadow-lg p-3 rounded-lg'>
            <div className='flex items-center'>
                <img className='w-12 rounded-3xl' src={userPhoto} alt="" />
                <div className='ml-2'>
                    <p className='font-bold capitalize'>{userName}</p>
                    <p>{userEmail}</p>
                </div>
            </div>
            <p>{review}</p>
        </div>
    );
};

export default Review;