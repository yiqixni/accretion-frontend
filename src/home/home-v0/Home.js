import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Statement_database from './Statement_database.js';
import Statement_marketplace from './Statement_marketplace.js';
import './Home.css'
import AccretionDatabase from './AccretionDatabase.jsx';
import AccretionMarketplace from './AccretionMarketplace.jsx';

import scrollToTop from '../helper/scrollToTop.js';

export default function Home () {
    return (
        <div className='home'>

            <Helmet>
                <title>Accretion | Reduce Frictions in Housing Market</title>
            </Helmet>

            <div className='segment'>
                <div className='row'>
                    <div id='small-title'>
                        Accretion Database
                    </div>
                </div>                

                <div className='row'>                    
                    <div className='column-2'>
                        <div className='row'>
                            <div id='mission-statement-title-database'>
                                Building a modern real estate database for 
                            </div>
                        </div>
                        <div className='row'>
                            <Statement_database/>
                        </div>
                        <div className='row'>
                            <div id='mission-statement-text'>
                            You no longer need to visit multiple locations to search for records. 
                            Accretion's database is a centralized record system for real estate deeds and titles,             
                            </div>
                            <div id='mission-statement-text-highlight'>accessible from anywhere,</div>
                            <div id='mission-statement-text-highlight'>within seconds. </div>
                        </div>                               
                    </div>                    

                    <div className='column'>
                        <Link to='/database' onClick={scrollToTop}>
                            <AccretionDatabase id="logo"/>
                        </Link>                        
                    </div>
                </div>

                <div className='row' style={{marginTop: "3svh"}}>
                    <div className='column-2'>
                        <div className='row' id='button'>
                            <div className='column'> 
                                <Link to='/database' onClick={scrollToTop}>
                                    <Button variant='outline-primary' id='button-home'> 
                                        Learn more
                                    </Button>
                                </Link>
                            </div>
                            
                            <div className='column'>
                                <Link to='contact-us' onClick={scrollToTop}>
                                    <Button variant='outline-primary' id='button-home'> 
                                        Contact us 
                                    </Button>
                                </Link>
                            </div>
                        </div>                                                                        
                    </div>
                    
                    <div className='column'></div> 
                </div>
            </div>

            <div className='segment'>                
                <div className='row'>
                    <div id='small-title'>
                        Accretion Marketplace
                    </div>
                </div>                

                <div className='row'>
                    <div className='column-2'>
                        
                        <div className='row'>
                            <div id='mission-statement-title-marketplace'>
                                A totally transparent marketplace for housing market investments from
                            </div>
                        </div>
                        
                        <div className='row'>
                            <Statement_marketplace/>
                        </div>
                        
                        <div className='row'>
                            <div id='mission-statement-text'>
                            Buy and sell real estate properties in one place with 
                            </div>
                            <div id='mission-statement-text-highlight'> a clear financial statistics,</div>
                            <div id='mission-statement-text-highlight'> a transparent bidding process,</div>
                            <div id='mission-statement-text-highlight'> a click of a button to become a homeowner. </div>
                        </div>                                                

                    </div>

                    <div className='column'>
                        <Link to='/marketplace' onClick={scrollToTop}>
                            <AccretionMarketplace id="logo"/>
                        </Link>
                    </div>
                </div>

                <div className='row' style={{marginTop: "3svh"}}>
                    <div className='column-2' >
                        <div className='row' id='button'> 
                            <div className='column'>
                                <Link to='/marketplace' onClick={scrollToTop}>
                                    <Button variant='outline-primary' id='button-home'> 
                                    Learn more
                                    </Button>
                                </Link>
                            </div>                        
                        
                            <div className='column'>
                                <Link to='/contact-us' onClick={scrollToTop}>
                                    <Button variant='outline-primary' id='button-home'> 
                                        Contact us 
                                    </Button>
                                </Link>
                            </div>                                               
                    </div>
                </div>                    
                <div className='column'></div>
                </div>
            </div>
        </div>
    )
}