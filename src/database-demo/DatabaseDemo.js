import { useState } from 'react';
import MapAutocomplete from './google-map-api/MapAutocomplete.js'; 
import DatabaseFetchAccretionDB from './accretion-backend-api/DatabaseFetchAccretionDB.js'; // fetch data from accretion-backend
import Lottie from 'react-lottie';
// import CheckoutFormStripe from '../payment-stripe/CheckoutFormStripe.js'; 

import AnimationDatabase from "../company/animation-database.json"
import CreateDeedVisualD3 from './d3-attom-demo/CreateDeedVisualD3.js';
import CreateDeedVisualPNG from './d3-attom-demo/CreateDeedVisualPNG.js';
import Share from "./share-save-edit/Share.js";
import Edit from "./share-save-edit/Edit.js";
import Save from "./share-save-edit/Save.js";
import DatabasePostPNG from './accretion-backend-api/DatabasePostPNG.js';

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationDatabase,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }    
};

export default function DatabaseDemo () {
    ////////// State Hooks //////////////

    // states for Google Maps API
    const [addressInfo, setAddressInfo] = useState(null); 
    // json data from backend API
    const [dataJSON, setDataJSON] = useState(null); 
    // responseStatus false if waiting for API to get back, true if get back from API
    const [responseStatus, setResponseStatus] = useState(false);
    // fetchStatus true if the API response is good, false if bad
    const [fetchStatus, setFetchStatus] = useState(null); 
    // dataPNG for deed visual static image
    const [dataPNG, setDataPNG] = useState(null); 
    // shareLink for sharing the deed visual 
    const [shareLink, setShareLink] = useState(null);    
    
    
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
                <MapAutocomplete addressInfo={addressInfo} 
                                 setAddressInfo={setAddressInfo} 
                                 setResponseStatus={setResponseStatus} 
                                 setDataPNG={setDataPNG} 
                                 setDataJSON={setDataJSON}
                                 id='search-bar'
                />                                                
            </div>

            {addressInfo && (                   
                <div>                     
                    <div>
                        <DatabaseFetchAccretionDB   addressInfo={addressInfo} 
                                                    setFetchStatus={updateFetchStatus} 
                                                    setResponseStatus={setResponseStatus} 
                                                    setDataJSON={setDataJSON} 
                                                    setShareLink={setShareLink}
                        />                        
                    </div>        
                    {!responseStatus && (
                        <div className='row'>
                            <div id='animation' style={{maxWidth:"300px"}}>
                                <div> Loading AccretionDB... </div>
                                <Lottie options={animationOptions}/>
                            </div>  
                        </div>
                    )}
                </div>
            )}
            {(dataJSON && responseStatus) && (
                <div className='row'>
                    <CreateDeedVisualD3 dataJson={dataJSON}/>
                    <CreateDeedVisualPNG dataJson={dataJSON} setDataPNG={setDataPNG}/> 
                    {dataPNG && (
                        <DatabasePostPNG dataPNG={dataPNG} dataJSON={dataJSON} />
                    )}                  
                    <div className="share-save-edit"> 
                        <div className="row">
                            <Share shareLink={shareLink} dataPNG={dataPNG} />
                            <Save />
                            <Edit />                                                                            
                        </div>                    
                    </div> 
                </div>
            )}
            {(fetchStatus == false) && (
                <div>
                    <div>
                        We Can't Find Your Property : - ( 
                        <br/>
                        <br/>
                        Contact Us To Learn More
                    </div>
                    <div>
                        Contact Button
                    </div>
                </div>
            )}
            

            {/* {addressInfo && (                   
                <div>                     
                    <div className='row' style={{marginBottom:"8svh"}}>
                        <DatabaseFetchAccretionDB addressInfo={addressInfo} setFetchStatus={updateFetchStatus} setResponseStatus={setResponseStatus} />                        
                    </div>        
                    {!responseStatus && (
                        <div className='row'>
                            <div id='animation' style={{maxWidth:"300px"}}>
                                <Lottie options={animationOptions}/>
                            </div>  
                        </div>
                    )}
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
            )}                                                                                                                                  */}
        </div>
    )
}