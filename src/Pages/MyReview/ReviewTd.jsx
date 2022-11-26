import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTd = ({ reviews, reviewDelete }) => {

    const { serviesName, userEmail, userName, userPhoto, review, time, _id } = reviews;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => reviewDelete(_id)} className="btn btn-active btn-primary">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userPhoto} alt="usr img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50">{userEmail}</div>
                    </div>
                </div>
            </td>
            <td >
                {review}
                <br />
                <p>{time}</p>
            </td>
            <td>{serviesName}</td>
            <th>
                <Link to={`/edit/${_id}`}>
                    <button className="btn btn-outline btn-primary">Edit</button>
                </Link>
            </th>
        </tr>
    );
};

export default ReviewTd;