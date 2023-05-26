import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section className='my-10'>
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=' flex flex-col items-center mx-10 my-10'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        <p className='my-10'>{review.details}</p>
                        <h3 className="text-2xl">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>



        </section>
    );
};

export default Testimonials;