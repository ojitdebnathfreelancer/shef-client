import React from 'react';
import Banner from '../../Componets/Banner/Banner';
import HomeServices from '../../Componets/HomeServices/HomeServices';
import useTitle from '../../useTitle/useTitle';
import aboutImg from '../../Assiets/logo/about-img.png';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <div className='border-2 border-slate-300 bg-slate-100 mt-5 rounded mx-3 lg:mx-0'>
                <div className='lg:flex items-center'>
                    <div>
                        <h1 className='text-3xl font-bold text-center'>About Me</h1>
                        <p className='p-5 lg:text-center text-justify'>Hello,ther i'm a shafe and i have many itmes of food to sarve to you dalesious food. i will give servies indivisul, family and any compmany and if you want to heir me for any ceremony or other fair.if you interest on me so you can check my website for my servies details and how many food i will make you can see and if you want i will make custom food for you.
                            <br />
                            <span className='font-bold font-serif italic'>Thnak you</span>
                        </p>
                    </div>
                    {/* info  */}
                    <img className='' src={aboutImg} alt="shafe" />
                </div>
            </div>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;