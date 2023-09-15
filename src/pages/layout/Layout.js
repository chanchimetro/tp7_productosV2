import './layout.css';
import { Outlet, Link } from "react-router-dom";
import cartImg from "../../assets/shopping-cart-outline.svg"
import CartItem from "../../elements/cartItem/CartItem.js";
import { useContext } from 'react';
import { cartContext } from '../../contexts/cartContext';


function Layout() {
    const cart = useContext(cartContext);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="MercaLibre" width="100%" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to='/' className="nav-item text-decoration-none">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                            <Link to='/main' className="nav-item text-decoration-none">
                                <a className="nav-link" aria-current="page" href="#">Catalogo</a>
                            </Link>
                            <Link to='/contact' className="nav-item text-decoration-none">
                                <a className="nav-link" aria-current="page" href="#">Contactanos</a>
                            </Link>
                        </ul>
                    </div>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <img src={cartImg} className="cartImg"></img>
                    </button>

                    <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="cartModalLabel">Carrito</h1>
                                </div>
                                <div className="modal-body">
                                    {
                                        cart.UserCart.Length == 0 ? <div>Carrito vacio</div> : <div>Carrito vacio</div>
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
