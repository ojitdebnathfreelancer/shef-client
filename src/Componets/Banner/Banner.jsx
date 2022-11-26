import React from 'react';
import banner1 from '../../Assiets/banner/banner1.jpg';
import banner2 from '../../Assiets/banner/banner2.jpg';
import banner3 from '../../Assiets/banner/banner3.jpg';
import banner4 from '../../Assiets/banner/banner4.jpg';
import BannerItems from './BannerItems';

const images = [
    {
        id:1,
        img:banner1,
        prev:4,
        next:2,
    },
    {
        id:2,
        img:banner2,
        prev:1,
        next:3,
    },
    {
        id:3,
        img:banner3,
        prev:2,
        next:4,
    },
    {
        id:4,
        img:banner4,
        prev:3,
        next:1,
    }
]

const Banner = () => {
    return (
        <div className='w-full'>
            <div className="carousel w-full">
                {
                    images.map(image => <BannerItems key={image.id} image={image}></BannerItems>)
                }
            </div>
        </div>
    );
};

export default Banner;