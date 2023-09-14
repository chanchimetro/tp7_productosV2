import './layout.css';
import { Outlet, Link } from "react-router-dom";
import cartImg from "../../assets/shopping-cart-outline.svg"


function Layout() {
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
                                    <li className='list-group-item'>
                                        <div className='container row'>
                                            <div className='col-3'>
                                                <img className='img-fluid' src='https://i.dummyjson.com/data/products/3/1.jpg'></img>
                                            </div>
                                            <div className='col'>
                                                <div className='row'>
                                                    <div className='col fw-semibold cart-prod-title fs-5'> TITULO</div>
                                                    <div className='col'>
                                                        <img className="float-end" src='https://icons8.com/icon/1942/trash' data-bs-dismiss="modal" aria-label="Close"></img>
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
                                    <hr></hr>
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
