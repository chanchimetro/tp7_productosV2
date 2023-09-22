import "./CartModal.css";
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../contexts/cartContext.js';
import CartItem from "../cartItem/CartItem.js";

function CartModal() {
    const cart = useContext(cartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let t  = 0;
        cart.userCart.forEach(element => {
            t += element.price * element.q;
        });
        setTotal(t);
        }, [cart.userCart]);

    return (
        <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="cartModalLabel">Carrito</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {cart.userCart.length == 0 ? <p>Tu carrito esta vacio. Agregale cosas... asi no esta vacio.</p> : cart.userCart.map((item, index) => (
                                <span>
                                    <CartItem item={item} itemIndex={index}></CartItem>
                                    {
                                        index === cart.userCart.length - 1 ? <span></span>:<hr></hr>
                                    }
                                </span>
                            ))}
                    </div>
                    <div className="modal-footer">
                        <p className="total fw-semibold">Total: $ {total}</p>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;