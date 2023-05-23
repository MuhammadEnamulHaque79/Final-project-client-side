import React from 'react';
const MenuItem = ({item}) => {
    const{name,image,recipe,price}=item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;