import React from 'react';
import Images from '../images/images';
import DetailProduct from '../detailProduct/detailProduct';
import './productContainer.css'

const ProductContainer = () => {
    return (
        <div className='productContainer'>
            <Images/>
            <DetailProduct/>
        </div>
    );
}

export default ProductContainer;
