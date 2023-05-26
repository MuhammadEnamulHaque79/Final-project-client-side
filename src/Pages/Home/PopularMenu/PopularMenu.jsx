import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const[menu]=useMenu();
    const popular = menu.filter(item => item.category ==='popular');

return (
        <section className='mb-5'>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="popular items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                  popular.map(item =><MenuItem
                    key={item._id}
                    item={item}
                  ></MenuItem>)  
                }
            </div>
        </section>
    );
};
export default PopularMenu;
            
