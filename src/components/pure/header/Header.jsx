import iconMenu from '../../../assets/images/icon-menu.svg'
import iconCart from '../../../assets/images/icon-cart.svg'
import avatar from '../../../assets/images/image-avatar.png'
import iconClose from '../../../assets/images/icon-close.svg'
import './header.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/cart.context'


const Header = () => {
    
    let { cart, cartOpen, setCartOpen } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(true);


    return (
        <div className='navbar'>
            <img className='menuIcon' src={iconMenu} alt='Icono Menu' onClick={() => setIsOpen(!isOpen)}/>
            <h1>sneakers</h1>
            <div className={`navbar-menu ${ isOpen ? 'show' : 'hide'}`} >
                <img id='iconClose' src={iconClose} onClick={() => setIsOpen(!isOpen)}/>
                <a>Collection</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div className='navbar-cart'>
                <img src={iconCart} onClick={() => setCartOpen(!cartOpen)}/>
                {cart.amount !== 0 ? 
                <span>{cart.amount}</span>
                : null}
            </div>
            <img className='avatar' src={avatar}/>
        </div>
    );
}

export default Header;
