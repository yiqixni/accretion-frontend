import React, { 
                useState, 
                useEffect 
            } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/dropdown'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logoAccretion.svg'; 

import { useAuth } from '../../user-auth/AuthContext'; 

export default function Header() {
    const [showSub_buy, setSub_buy] = useState(false);
    const handleMouseEnter_buy = () => setSub_buy(true); 
    const handleMouseLeave_buy = () => setSub_buy(false); 

    const [showSub_sell, setSub_sell] = useState(false);
    const handleMouseEnter_sell = () => setSub_sell(true); 
    const handleMouseLeave_sell = () => setSub_sell(false); 

    /* authenticate user with AuthContext */ 
    const { isLoggedIn } = useAuth();   

    return (
        <header className="header">
            <Link to="/"> 
                <img 
                    src={logo} 
                    className="header_logo"
                /> 
            </Link>
            <Dropdown className='menu_container'
                    onMouseEnter={handleMouseEnter_buy}
                    onMouseLeave={handleMouseLeave_buy}>
                <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
                    Buy
                </Dropdown.Toggle>
                <Dropdown.Menu show={showSub_buy}>
                    <Dropdown.Item>
                        Home
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Office
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Commercial
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='menu_container'
                    onMouseEnter={handleMouseEnter_sell}
                    onMouseLeave={handleMouseLeave_sell}>
                <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
                    <Link to="/seller-upload"> Sell </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={showSub_sell}>
                    <Dropdown.Item>
                        Home
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Office
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Commercial
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
            
                
        </header>
    );
}
