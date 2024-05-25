import { useState } from 'react';
import MapAutocomplete from './MapAutocomplete.js'; 
import DatabaseFetchAccretionDB from './DatabaseFetchAccretionDB.js'; // fetch data from accretion-backend
// import DatabaseFetchAttom from './DatabaseFetchAttom.js'; //direct fetch data from attom 
// import CheckoutFormStripe from '../payment-stripe/CheckoutFormStripe.js'; 

import ContactUs from '../contact-us/ContactUs.js';

export default function DatabaseDemo () {

    const [fetchStatus, setFetchStatus] = useState(null); 
    const [addressInfo, setAddressInfo] = useState(null);
    
    const updateAddressInfo = (data) => {
        setAddressInfo(data);
    } 

    const updateFetchStatus = (data) => {
        setFetchStatus(data); 
    }   

    return (
        <div className='database-demo'>
            <div className='row'> 
                <div id='title'> Accretion Database Demo </div>
            </div>  

            <div className='row'>
                <div id='small-title'>All Deed Records in One Place</div>
            </div>
            
            <div className='row'>                
                <div className='text' style={{textAlign:"center"}}>
                    Your Next Title Search Starts Here: 
                </div>                                                                                                
            </div>

            <div className='row' style={{marginBottom:"8svh"}}>                
                <MapAutocomplete updateAddressInfo={updateAddressInfo} id='search-bar'/>                                                
            </div>

            {addressInfo && (                   
                <div>                     
                    <div className='row' style={{marginBottom:"8svh"}}>
                        <DatabaseFetchAccretionDB addressInfo={addressInfo} setFetchStatus={updateFetchStatus} />                        
                    </div>                                       
                    {fetchStatus == true ? (
                        <div className='row'> 
                            <div className='text'> 
                                We are in the process building the best database for deeds and titles.
                                <br/> 
                                To perfect our database, 
                                we are working with local county registry, 
                                real estate attorneys, 
                                title companies. 
                                <br/>
                                Contact us to learn more. 
                            </div>
                            <div>
                                <ContactUs />
                            </div>
                        </div>
                    ) : (
                        <div className='row'> 
                        <div className='text'> 
                            We are having trouble finding your property. Please enter the unit number if it is a multi-family home. 
                            <br/>
                            Contact us, our support team will get back to you shortly.                            
                        </div>
                        <div>
                            <ContactUs />
                        </div>
                    </div>
                    )}
                    
                    
                    
                </div>
            )}                             

            {/* <div className='row'>
                <div id='small-title'> 
                    The Best in Class Visualization Tool for Title Abstraction 
                </div> 
            </div>            
            <div className='row'>    

                <div className='text'>
                    Experience the title abstract visual for the property located in 22 Dell St. Somerville, MA. 
                    <br/>
                    Just click on the visual to inspect the title abstract detail. 
                    <br/>
                    Power by the best visualization tool from Accretion,                         
                    you can effortlessly inteprete the title abstract.                                                                                                                         
                </div>                    
                
            </div>
            

            <div className='row'>                
                <CreateDeedVisualAttom visualWidth={600} />
            </div>                         */}
                                                                                        
        </div>
    )
}