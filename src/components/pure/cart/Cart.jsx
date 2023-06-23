import './cart.css';
import { thumbnailProduct } from '../../../models/imagesArray'
import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context'
import destroy from '../../../assets/images/icon-delete.svg'

const Cart = () => {
    
    let { cart,setCart, cartOpen } = useContext( CartContext )

    const handleDelete = () =>{
        if (cart.amount <= 0) {
            setCart({
                product:cart.product,
                price: cart.price,
                amount: 0
            })    
        } else {
            setCart({
                product: cart.product,
                price: cart.price,
                amount: cart.amount - 1
            }) 
        }
    }

    return (
        <>
        {cartOpen ? 
            <section className='cart'>
                <div className='cart-title'>
                    <h5>Cart</h5>
                </div>
                <hr/>
                <div className='product'>
                    {cart.amount === 0 ? 
                    (<p className='empty'>You cart is empty</p>)
                    : 
                    (
                        <div>
                            <div className='product-container'>
                                <img src={thumbnailProduct[0]}/>
                                <div>
                                    <p>{cart.product}</p>
                                    <p>${cart.price} x {cart.amount}  <b>${cart.amount * cart.price}</b></p>
                                </div>
                                <img onClick={handleDelete} className='delete' src={destroy}/>
                            </div>
                            <button className='btn-checkout'>Checkout</button>
                        </div>
                        
                    )}
                </div>
            </section> : null}
        </>
    );
}

export default Cart;
