import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';
import logo from './logo_letters_v2.svg'; 

import { useAuth } from '../user-auth/AuthContext'; 

export default function Header() {
    /* authenticate user with AuthContext */ 
    const { isLoggedIn } = useAuth();   

    return (
        <header className="header">
            <div className='logo-section'>
                <div className='menu-container'>
                    <Link to="/"> 
                        <img 
                            src={logo} 
                            className="header_logo"
                        /> 
                    </Link>
                </div>                
            </div>            
            <div className='left-section'>
                <div className='menu_container'>
                    <Link to="/database"> 
                        <Button variant='outline-primary' id='dropdown-basic'>
                            Database 
                        </Button>
                    </Link>
                </div>
                <div className='menu_container'>                
                    <Button variant='outline-primary' id='dropdown-basic'>
                        Marketplace 
                    </Button>                
                </div>
            </div>
            <div className='right-section'>
                <div className='menu_container'> 
                    <Link to="/company"> 
                        <Button variant='outline-primary' id='dropdown-basic'> 
                            Company
                        </Button>
                    </Link>
                </div>                
                <div className='menu_container'> 
                    <Link to="/contact-us"> 
                        <Button variant='outline-primary' id='button-contact-us'> 
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        
        </header>
    );
}


// mobile friendly version 

// import { Link } from 'react-router-dom';
// import { useState } from 'react'; // Import useState hook
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import './Header.css';
// import logo from './logo_letters_v2.svg'; 

// import { useAuth } from '../user-auth/AuthContext'; 

// export default function Header() {
//     const { isLoggedIn } = useAuth();
//     const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

//     // Function to toggle menu visibility
//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <header className="header">
//             <div className='center-section'>
//                 <Link to="/"> 
//                     <img 
//                         src={logo} 
//                         className="header_logo"
//                         alt="Logo"
//                     /> 
//                 </Link>
//             </div>
//             {/* Conditionally render menu based on menuOpen state */}
//             <div className={`left-section ${menuOpen ? 'show' : ''}`}>
//                 <div className='menu_container'>
//                     <Link to="/database"> 
//                         <Button variant='outline-primary' id='dropdown-basic'>
//                             Database 
//                         </Button>
//                     </Link>
//                 </div>
//                 <div className='menu_container'>
//                     <Link to="/sell"> 
//                         <Button variant='outline-primary' id='dropdown-basic'>
//                             Marketplace 
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//             <div className='right-section'>
//                 <div className='menu_container'> 
//                     <Link to="/company"> 
//                         <Button variant='outline-primary' id='dropdown-basic'> 
//                             Company
//                         </Button>
//                     </Link>
//                 </div>
//                 <div className='menu_container'> 
//                     <Link to="/contact-us"> 
//                         <Button variant='outline-primary' id='button-contact-us'> 
//                             Contact Us
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//             {/* Button to toggle menu visibility */}
//             <div className="menu-toggle" onClick={toggleMenu}>
//                 <Button variant='outline-primary'>
//                     {menuOpen ? 'Close Menu' : 'Open Menu'}
//                 </Button>
//             </div>
//         </header>
//     );
// }

