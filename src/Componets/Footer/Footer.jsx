import React from 'react';
import logo from '../../Assiets/logo/logo.png';
import { ImYoutube, ImTwitter, ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className='h-24' src={logo} alt="" />
                    <p>Shef Service<br />Providing reliable tech since 1992</p>
                </div>
                <div className='h-full flex items-center'>
                    <div>
                        <p className='text-center'>Copyright &copy; 2022 by Shef</p>
                        <p>Developed By <span className='text-success'>Ojit Deb Nath</span> </p>
                    </div>
                </div>
                <div className='h-full flex items-center'>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4 mt-2">
                            <Link>
                                <ImTwitter size={30} />
                            </Link>
                            <Link>
                                <ImYoutube size={30} />
                            </Link>
                            <Link>
                                <ImFacebook2 size={30} />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;