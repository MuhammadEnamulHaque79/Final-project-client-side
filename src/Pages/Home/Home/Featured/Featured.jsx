import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='feature-item bg-fixed text-white mt-10 mb-5'>
            <SectionTitle
             subHeading="---Check it out---"
             heading="FEATURED ITEMS"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-opacity-10 bg-slate-300 px-10 py-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-5'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Loremstiaebcaec voluptatibus velit reprehenderit sed ipsam cumque, quos dignissimos aliquid alias, fuga explicabo qui accusantium nam, cupiditate fugiat esse! Possimus ipsam iste culpa iure.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;