import "./CartItem.css"
import trashImg from "../../assets/icons8-trash.svg";

function CartItem() {
    return(
        <li className='list-group-item'>
            <div className='container row'>
                <div className='col-3'>
                    <img className='img-fluid' src='https://i.dummyjson.com/data/products/3/1.jpg'></img>
                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col fw-semibold cart-prod-title fs-5'> TITULO</div>
                        <div className='col'>
                            <img className="float-end" src={trashImg} data-bs-dismiss="modal" aria-label="Close"></img>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col'>
                            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                <button type="button" class="btn btn-outline-secondary">-</button>
                                <span class="btn btn-outline-secondary">4</span>
                                <button type="button" class="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='float-end fw-bold fs-5'>$ 123</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CartItem;