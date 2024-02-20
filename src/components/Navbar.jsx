/* eslint-disable react/prop-types */
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../contexts/theme";


function Navbar({handleThemeToggle}){

    const theme = useContext(ThemeContext)
    const isLight = theme == 'light'
    return (
        <nav className={isLight ? "navbar" : 'navbar dark'}>
            <h3 >The db dojo blog</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Classic toggled={!isLight} toggle={handleThemeToggle} duration={750}/>
            </div>
        </nav>
    );
}

export default Navbar;