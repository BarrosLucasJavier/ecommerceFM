import { createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState({
        product:"",
        price:0,
        amount:0
    });
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <CartContext.Provider value={{cart, setCart, cartOpen, setCartOpen}}>
            {children}
        </CartContext.Provider>
    )
}