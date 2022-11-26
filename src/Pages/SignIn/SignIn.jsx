import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';

const SignIn = () => {
    useTitle("Sign In");
    const { signinUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('');

    const hadelSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email, password)
            .then((result) => {

                fetch('https://shafe-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body:JSON.stringify({email: result.user.email })
                })
                    .then(res =>res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token);
                        navigate(from, { replace: true });
                        form.reset();
                    });
            })
            .catch(error => setError(error.message));
    };


    return (
        <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please, provide your informaiton like email and password then you will go some spesipic pages</p>
                </div>
                <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={(e) => hadelSignin(e)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <p className='text-center text-red-600 font-bold'>{error}</p>
                                <p className='text-center'>You have't an account <Link className='text-blue-900 font-bold' to='/signup'>Sign Up</Link> </p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;