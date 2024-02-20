import { Link } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
function Navbar(_props){
    return (
        <nav className="navbar">
            <h3 >The db dojo blog</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;