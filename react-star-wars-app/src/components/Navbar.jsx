import { Link } from "react-router-dom";
import  './Navbar.css'

function NavBar() {
    return (  
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                   <h1>Star Wars May </h1>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;