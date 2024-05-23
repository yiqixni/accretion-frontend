import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import scrollToTop from '../helper/scrollToTop';

import './Database.css';

import CountyMap from './Usa_counties_large.png';
import Visualization from './database-abstract-of-title-visualization.svg';
import Service from './database-services.svg';
import StatementAnimation1 from './StatementAnimation1';
import StatementAnimation2 from './StatementAnimation2';

export default function Database () {
    return (
        <div className='database'>
            <Helmet>
                <title>Database | Property Deeds in One Place</title>
            </Helmet>

            <div className='row'>
                <div className='small-title'>Accretion</div>
            </div>

            <div className='row'>
                <div className='headline-title'>
                    <span id='highlight'>Database. </span> 
                    Find ALL real estate titles and deeds in ONE place. 
                </div>
            </div>

            <div className='row'>
                <div className='column'> 
                    
                    <div className='row'>
                        <div id='title'>ALL data in one place. </div>         
                    </div>          
                    
                    <div className='row'>
                        <div id='text'> 
                            Unify deeds and titles that are scattered from 3,000+ counties into one modern database.                     
                            Complete your title search task in seconds. 
                            Shorten your closing process time. 
                            
                            Accretion Database lets you invest in the housing market with confidence and speed.
                            by empowering you with  
                        </div>                        
                    </div>                      

                    <div className='row'>
                        <StatementAnimation1/> 
                    </div>                    
                    
                    <div className='row'>
                        <img src={CountyMap} id='pic-mobile'/>                                             
                    </div>

                    <div className='row'>
                        <div className='column'>
                            <Link to='/contact-us' style={{ textDecoration: 'none' }} onClick={scrollToTop}>                                                          
                                    <Button id='button-database'>
                                        Contact us
                                    </Button>                                               
                            </Link>
                        </div>                        
                        <div className='column'>
                            <Link to='/database/demo' style={{ textDecoration: 'none' }}>
                                                            
                                <Button id='button-database' onClick={scrollToTop}>
                                    Reqeust a demo
                                </Button>               
                                
                            </Link>
                        </div>
                        
                    </div>                                                           
                </div>

                <div className='column'>                    
                    <img src={CountyMap} id='pic'/>                          
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <img src={Visualization} id='pic'/>
                </div>

                <div className='column'> 
                    <div className='row'>
                        <div id='title'>The BEST visualization. </div> 
                    </div>
                    
                    <div className='row'>
                        <div id='text'>
                            Trace the chain of title history with clear graphics. 
                            Transform the cryptic abstract of title into the easy-to-understand blocks. 
                            Understand every property transaction through simple, visual representations. 
                        </div>
                    </div>
                    
                    <div className='row'>
                        <img src={Visualization} id='pic-mobile'/>
                    </div>
                    
                    <div className='row'>
                        <div className='column'>
                            <Link to='/contact-us' style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                                          
                                <Button id='button-database'>
                                    Contact us
                                </Button>               
                                
                            </Link>
                        </div>
                        <div className='column'>
                            <Link to='/database/demo' style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                                          
                                <Button id='button-database'>
                                    Request a demo
                                </Button>               
                                
                            </Link> 
                        </div>
                    </div>
                    

                    
                </div>
            </div>

            <div className='row'>
                <div className='column'> 
                    <div className='row'>
                        <div id='title'>Service to real estate experts. </div> 
                    </div>
                    <div className='row'>
                        <div id='text'>
                        Designed to service real estate professionals.                
                        Building to empower everyone to become a real estate expert.                     
                        We are here to serve you whether you are: 
                        </div>
                    </div>
                    
                    <div className='row'>
                        <StatementAnimation2/>
                    </div>
                    
                    <div className='row'>
                        <img src={Service} id='pic-mobile'/>
                    </div>
                    
                    <div className='row'>
                        <div className='column'>
                            <Link to='/contact-us' style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                                         
                                    <Button id='button-database'>
                                        Contact us 
                                    </Button>               
                                
                            </Link> 
                        </div>

                        <div className='column'>
                            <Link to='/database/demo' style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                                       
                                    <Button id='button-database'>
                                    Request a demo
                                    </Button>               
                                
                            </Link>  
                        </div>
                    </div>                                                         
                </div>

                <div className='column'>
                    <img src={Service} id='pic'/>
                </div>

            </div>

            <div className='row'>
                <div className='headline-title'>
                    We are dedicated to empowering 
                    <span id='highlight'> EVERYONE </span> 
                    to become an expert by building the most comprehensive database.
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <Link to='/contact-us' style={{ textDecoration: 'none' }} onClick={scrollToTop}>                                                 
                            <Button id='button-database'>
                                Contact us to learn more
                            </Button>                                       
                    </Link>
                </div>

                <div className='column'>
                    <Link to='/database/demo' style={{ textDecoration: 'none' }} onClick={scrollToTop}>                                                 
                            <Button id='button-database'>
                                Request a demo
                            </Button>                                       
                    </Link>
                </div>
            </div>                    

        </div>
    )
}