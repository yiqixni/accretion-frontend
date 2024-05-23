import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';
import { IoIosCloseCircleOutline, IoIosArrowForward } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logo_letters_v2.svg'; 

import { useAuth } from '../user-auth/AuthContext'; 


export default function Header() {
    /* authenticate user with AuthContext */ 
    const { isLoggedIn } = useAuth();   

    const [showMenu, setShowMenu] = useState(false); 

    const toggleMenu = () => {
        setShowMenu(!showMenu); 
    }

    return (
        <header className="header">
            <div className='logo-section'>                
                <Link to="/"> 
                    <img src={logo} id="header_logo"/> 
                </Link>                
            </div>     

            <div className='menu-section'>                
                <Link to="/database"> 
                    <Button variant='outline-primary' id='dropdown-basic'>
                        Database 
                    </Button>
                </Link>                                
            </div>

            <div className='menu-section'>   
                <Link to="/marketplace">
                    <Button variant='outline-primary' id='dropdown-basic'>
                        Marketplace 
                    </Button>               
                </Link>                                     
            </div>            

            <div className='menu-section'> 
                <Link to="/company"> 
                    <Button variant='outline-primary' id='dropdown-basic'> 
                        Company
                    </Button>
                </Link>
            </div>                

            <div className='contact-section'> 
                <Link to="/contact-us"> 
                    <Button variant='outline-primary' id='button-contact-us'> 
                        Contact Us
                    </Button>
                </Link>
            </div>
            
            <div className='show-menu-section'>
                <Button variant='outline-primary' id='dropdown-basic' onClick={toggleMenu}>
                    {showMenu ? <IoIosCloseCircleOutline/> : <FaBars/>}                    
                </Button>
            </div>

            {showMenu && 
                <div className='overlay'>      
                    <div className='row-overlay'>
                        <Link to="/database" onClick={toggleMenu}>                                             
                            <div className='option'>                                                                            
                                Database                                                          
                            </div>                                             
                        </Link>   
                    </div>

                    <div className='row-overlay'>
                        <Link to="/marketplace" onClick={toggleMenu}>                                                                                                        
                            <div className='option'> 
                                Marketplace 
                            </div>                                                                                                        
                        </Link>
                    </div> 

                    <div className='row-overlay'>
                        <Link to="/company" onClick={toggleMenu}>                                                                                                        
                            <div className='option'> Company </div>                                                                                                        
                        </Link>
                    </div>

                    {/* <div className='row-overlay'>                        
                    </div> */}
                    
                    <div className='row-overlay'>
                        <Link to="/contact-us" onClick={toggleMenu}>                                                                                                        
                            <div className='option'> Contact Us </div>                                                                                                        
                        </Link>
                    </div>                    

                    <div className='row-overlay' style={{border: "none"}}>                        
                    </div>    
                    <div className='row-overlay' style={{border: "none"}}>                        
                    </div>                    
                    
                </div>
            }
        
        </header>
    );
}