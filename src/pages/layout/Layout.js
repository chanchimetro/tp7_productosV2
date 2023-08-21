import './layout.css';
import { Outlet, Link } from "react-router-dom";


function Layout() {
    return (
        <div className="">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="MercaLibre" width="100%"/>
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet />
            <footer className="bg-body-tertiary py-3 mt-5 mx-0 text-muted">
                Esto es un footer!
            </footer>
        </div>
    );
}

export default Layout;
