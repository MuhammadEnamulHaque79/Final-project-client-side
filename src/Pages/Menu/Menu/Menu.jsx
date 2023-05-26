import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/pizza-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const[menu]=useMenu();
    const dessert = menu.filter(item => item.category ==='dessert');
    const pizza = menu.filter(item => item.category ==='pizza');
    const salad = menu.filter(item => item.category ==='salad');
    const soup = menu.filter(item => item.category ==='soup');
    const offered = menu.filter(item => item.category ==='offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img}title="our menu"></Cover>
            <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---">

            </SectionTitle>
        <MenuCategory items={offered} ></MenuCategory>
            
           
        </div>
    );
};

export default Menu;
                