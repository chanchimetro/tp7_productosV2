import './layout.css';
import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
        <Outlet/>
    </>
  );
}

export default Layout;
