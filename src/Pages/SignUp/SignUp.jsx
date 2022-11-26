import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../useTitle/useTitle';

const SignUp = () => {
    useTitle("Sign Up")
    const { signupUser, updateUser, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;

        signupUser(email, password)
            .then((result) => {
                userUpdate(name, photo);

                fetch('https://shafe-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email: result.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token);
                        navigate(from, { replace: true });
                        form.reset();
                    });
            })
            .catch(error => setError(error.message));
    };
    // user sign up 

    const userGoogle = () => {
        googleUser()
            .then((result) => {
                fetch('https://shafe-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email: result.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => setError(error.message));
    };
    // google sing in user 

    const userUpdate = (name, photot) => {
        const profile = {
            displayName: name,
            photoURL: photot
        };

        updateUser(profile)
            .then(() => { })
            .catch(error => setError(error.message));
    };
    // user update 

    return (
        <div>
            <div className="bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2">Sign Up now!</h1>
                        <div className="card-body">
                            <form onSubmit={(e) => handelSignUp(e)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Fulll Name</span>
                                    </label>
                                    <input type="text"
                                        name="name" required placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photot URL</span>
                                    </label>
                                    <input type="text"
                                        name="photoURL" required placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" required placeholder="password" className="input input-bordered" />
                                    <p className='text-center mt-3'>Have you already and account <Link to='/signin' className='text-blue-900 font-bold'>Sign In</Link> </p>
                                </div>
                                <p className='text-center text-red-600 font-bold mt-2'>{error}</p>
                                <div className="form-control">
                                    <button type='submit' className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                            <p className='text-center mt-1 font-bold'>Or</p>
                            <button onClick={userGoogle} className="btn btn-outline btn-primary mt-1 capitalize">
                                <FaGoogle size={30} />
                                <span className='ml-3 text-2xl'>
                                    Google
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;