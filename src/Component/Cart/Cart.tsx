import React, { useState } from 'react';
import Product from '../Product/Product';
const productData = [
    {
        id: 1,
        name: 'Noodles',
        price: 100,
    },
    {
        id: 2,
        name: 'Onion',
        price: 80,
    },
    {
        id: 3,
        name: 'Laccha Semai',
        price: 120,
    },
    {
        id: 4,
        name: 'Lifeboy Shoap',
        price: 50,
    },
    {
        id: 5,
        name: 'Soyabean Oil -2ltr',
        price: 350,
    },
    {
        id: 6,
        name:'Musturd Oil -2ltr',
        price: 400,
        }
]
 
const Cart = () => {

    return (
        <div>
          <h2>Welcome to Our Food Shop</h2>
          {
      {
        productData.map((pd) => <Product key={pd.id} name={pd.name} price={pd.price} />)
     }
          }  
        </div>
    );
};

export default Cart;