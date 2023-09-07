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
                    <img src={cartImg} className="cartImg"></img>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
