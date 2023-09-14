import './layout.css';
import { Outlet, Link } from "react-router-dom";
import cartImg from "../../assets/shopping-cart-outline.svg"


function Layout() {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="MercaLibre" width="100%" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <Link to='/' className="nav-item text-decoration-none">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                            <Link to='/main' className="nav-item text-decoration-none">
                                <a class="nav-link" aria-current="page" href="#">Catalogo</a>
                            </Link>
                            <Link to='/contact' className="nav-item text-decoration-none">
                                <a class="nav-link" aria-current="page" href="#">Contactanos</a>
                            </Link>
                        </ul>
                    </div>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <img src={cartImg} className="cartImg"></img>
                    </button>

                    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="cartModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
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
