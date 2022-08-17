import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Navbar = () => {

    const { user, setUser } = useContext( UserContext );

    const logout = () => {
        setUser();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                            to="/">
                            Home
                        </NavLink>
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                            to="/about">
                            About
                        </NavLink>
                    </ul>
                </div>

                <div id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            !user &&                             
                            <NavLink 
                                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                                to="/login">
                                Login
                            </NavLink>                          
                        }              
                        {
                            user && 
                            <button className="btn btn-danger logout" onClick={ logout }>
                                Logout
                            </button>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
