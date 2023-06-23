import React, { useState, useContext } from 'react';
import { CartContext } from '../../../context/cart.context'
import minus from '../../../assets/images/icon-minus.svg'
import plus from '../../../assets/images/icon-plus.svg'
import cartIcon from '../../../assets/images/icon-cart.svg'
import './detailProduct.css'

const DetailProduct = () => {

    let { cart , setCart} = useContext( CartContext )
    const [count, setCount] = useState(0);
    const product = "Fall Limited Edition Sneakers"
    const price = 125.00

    const handleMinus = () =>{
        if (count <= 0) {
            setCount(0);
        }else{
            setCount(count - 1)
        }
    }

    const handlePlus = () =>{
        setCount(count + 1)
    }

    const handleAddToCart = (e) =>{
        e.preventDefault()
        setCart({
            product: product,
            price: price,
            amount: count
        })
    }
    
    return (
        <div className='detail-container'>
            <h5>SNEAKER COMPANY</h5>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='detail-price'>
                <h3>$125.00</h3>
                <h5 className='discount'>50%</h5>
                <h5 className='original-price'><s>$250</s></h5>
            </div>
            <div className='detail-amount'>
                <img onClick={handleMinus} src={minus}/>
                <h4>{count}</h4>
                <img onClick={handlePlus} src={plus}/>
            </div>
            <button onClick={handleAddToCart}><img className='iconCart' src={cartIcon}/>Add to cart</button>
        </div>
    );
}

export default DetailProduct;
