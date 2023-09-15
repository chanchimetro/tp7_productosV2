import "./CartModal.css";
import { useContext } from 'react';
import { cartContext } from '../../contexts/cartContext.js';

function CartModal() {
    const cart = useContext(cartContext);

    return (
        <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="cartModalLabel">Carrito</h1>
                    </div>
                    <div className="modal-body">
                        {
                            cart.userCart.length === 0 ? <p>Tu carrito esta vacio. Agregale cosas... asi no esta vacio</p> : <></>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;