import { useState } from 'react';
import MapAutocomplete from './google-map-api/MapAutocomplete.js'; 
import DatabaseFetchAccretionDB from './accretion-backend-api/DatabaseFetchAccretionDB.js'; // fetch data from accretion-backend

import Loading from './loading-error-handling/Loading.js';
import Error from './loading-error-handling/Error.js';
// import CheckoutFormStripe from '../payment-stripe/CheckoutFormStripe.js'; 

import CreateDeedVisualD3 from './d3-attom-demo/CreateDeedVisualD3.js';
import CreateDeedVisualPNG from './d3-attom-demo/CreateDeedVisualPNG.js';
import Share from "./share-save-edit/Share.js";
import Edit from "./share-save-edit/Edit.js";
import Save from "./share-save-edit/Save.js";
import GenerateTitleReport from './share-save-edit/GenerateTitleReport.js';
import DatabasePostPNG from './accretion-backend-api/DatabasePostPNG.js';

import "./DatabaseDemo.css"

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
    // linkPNG: link to the static deed visual from backend 
    const [linkPNG, setLinkPNG] = useState(null); 
    
    const updateFetchStatus = (data) => {
        setFetchStatus(data); 
    }   

    return (
        <div className='database-demo'>
            <div className='row'> 
                <div id='title'> Accretion Database </div>
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
                                 setFetchStatus={setFetchStatus}
                                 setLinkPNG={setLinkPNG}
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
                        <Loading/>
                    )}
                </div>
            )}
            {(dataJSON && responseStatus) && (
                <div className='row'>
                    <CreateDeedVisualD3 dataJson={dataJSON}/>
                    <CreateDeedVisualPNG dataJson={dataJSON} setDataPNG={setDataPNG}/> 
                    {dataPNG && (
                        <DatabasePostPNG dataPNG={dataPNG} dataJSON={dataJSON} setLinkPNG={setLinkPNG}/>
                    )}                  
                    <div className="share-save-edit"> 
                        <div className="row">                                                        
                            <Share shareLink={shareLink} linkPNG={linkPNG} />
                            <Save />
                            <Edit />                                                                            
                        </div>     
                        <div className='row'> 
                            <GenerateTitleReport />
                        </div>               
                    </div> 

                    

                </div>
            )}
            {(fetchStatus == false) && (
                <div> 
                    <Error/> 
                </div>
            )}
                  
        </div>
    )
}