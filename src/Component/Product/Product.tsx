import React from 'react';

interface ProductItem{
    name: string;
    price: string;
}

const Product = ({name , price} : ProductItem) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Price : {price} </p>
        </div>
    );
};

export default Product;