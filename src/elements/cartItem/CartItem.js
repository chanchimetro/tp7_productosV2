import "./CartItem.css"
import trashImg from "../../assets/icons8-trash.svg";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import PropTypes from 'prop-types';

const removeItem = (index, cart) => {
    let auxArray = cart.userCart;
    auxArray.splice(index, 1);
    cart.setUserCart([...auxArray]);
}

const changeItemQ = (index, item, cart, x) => {
    let auxArray = cart.userCart;
    auxArray.splice(index, 1,
        {
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.img,
            q: item.q + x
        });
    cart.setUserCart([...auxArray]);
}

function CartItem({ item, itemIndex }) {
    const cart = useContext(cartContext);

    return (
        <li className='list-group-item'>
            <div className='container row'>
                <div className='col-3'>
                    <img className='img-fluid' src={item.img} alt="Item Image"></img>
                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col-8 fw-semibold cart-prod-title fs-6'>{item.title}</div>
                        <div className='col'>
                            <button className="float-end btn p-0" onClick={() => removeItem(itemIndex, cart)}><img src={trashImg} alt="trash-bin"></img></button>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div class="btn-group btn-group-sm col" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-secondary" onClick={() => {if (item.q > 1) changeItemQ(itemIndex, item, cart, -1)}}>-</button>
                            <span class="btn btn-outline-secondary">{item.q}</span>
                            <button type="button" class="btn btn-outline-secondary" onClick={() => changeItemQ(itemIndex, item, cart, 1)}>+</button>
                        </div>
                        <div className='col'>
                            <div className='float-end fw-bold fs-6'>$ {item.price * item.q}</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

CartItem.propTypes = {
    item: PropTypes.object,
    itemIndex: PropTypes.number
};

export default CartItem;