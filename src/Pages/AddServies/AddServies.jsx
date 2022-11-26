import React from 'react';
import useTitle from '../../useTitle/useTitle';
import { ToastContainer, toast } from 'react-toastify';

const AddServies = () => {
    useTitle("Add Servies");
    const handelAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.serviesName.value;
        const discrip = form.discription.value;
        const photo = form.photoURL.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const servies ={
            serviceName:name,
            img:photo,
            discription:discrip,
            price:price,
            rating:rating
        };
        
        fetch('https://shafe-server.vercel.app/addservies', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(servies)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                // alert("Servies added successfull");
                toast.success('Servies added successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

                form.reset();
            }
        });
    };

    return (
        <div className="bg-base-200">
            <ToastContainer/>
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handelAdd}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Servies Name</span>
                                </label>
                                <input type="text"
                                    name="serviesName" placeholder="Servies name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discription</span>
                                </label>
                                <input type="text"
                                    name="discription"
                                    placeholder="Discription" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text"
                                    name="photoURL"
                                    placeholder="PhotoURL" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"
                                    name="price"
                                    placeholder="Price" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text"
                                    name="rating"
                                    placeholder="Rating" required className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServies;