import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logo_letters_v2.svg'; 

import { useAuth } from '../../user-auth/AuthContext'; 

export default function Header() {
    /* authenticate user with AuthContext */ 
    const { isLoggedIn } = useAuth();   

    return (
        <header className="header">
        <div className='center-section'>
            <Link to="/"> 
                <img 
                    src={logo} 
                    className="header_logo"
                /> 
            </Link>
        </div>
        <div className='left-section'>
            <div className='menu_container'>
                <Link to="/buy"> 
                    <Button variant='outline-primary' id='dropdown-basic'>
                        Buy 
                    </Button>
                </Link>
            </div>
            <div className='menu_container'>
                <Link to="/sell"> 
                    <Button variant='outline-primary' id='dropdown-basic'>
                        Sell 
                    </Button>
                </Link>
            </div>
        </div>
        <div className='right-section'>
            <div className='menu_container'> 
                <Link to="/about-us"> 
                    <Button variant='outline-primary' id='dropdown-basic'> 
                        About Us
                    </Button>
                </Link>
            </div>
            {!isLoggedIn && (
                <div className='menu_container'>
                    <Link to="/signup">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            )}
            {!isLoggedIn && (
                <div className='menu_container'>
                    <Link to="/login">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Login
                        </Button>
                    </Link>
                </div>
            )}
            {isLoggedIn && (
                <div className='menu_container'>
                    <Link to="/you">
                        <Button variant='outline-primary' id='dropdown-basic'>
                            You
                        </Button>
                    </Link>
                </div>
            )}
        </div>
        
        </header>
    );
}
