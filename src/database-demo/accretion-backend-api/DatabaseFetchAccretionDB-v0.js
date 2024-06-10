import React, {useState, useEffect} from "react";  

// import CreateDeedVisualAccretionDB from "./d3-attom-demo/CreateVisualAccretionDB.js";
import CreateDeedVisualD3 from "../d3-attom-demo/CreateDeedVisualD3.js";
import CreateDeedVisualPNG from "../d3-attom-demo/CreateDeedVisualPNG.js";
import Share from "../share-save-edit/Share.js";
import Edit from "../share-save-edit/Edit.js";
import Save from "../share-save-edit/Save.js";

import "../DatabaseDemo.css";

const url_accretionDB_getData = "https://backend-1.accretion.life/api/database-visualization/get-data/";
const url_accretionDB_postPNG = "https://backend-1.accretion.life/api/database-visualization/post-png/";
const url_database_view = process.env.REACT_APP_LOCAL_HOST + "/database/demo/view/"; 


export default function DatabaseFetchAccretionDB({ addressInfo, setFetchStatus, setResponseStatus, setDataJSON }) {    
    
    const [dataATTOM, setDataATTOM] = useState(null); 
    const [dataPNG, setDataPNG] = useState(null); 
    const [propertyID, setPropertyID] = useState(null);    
    const [queryString, setQueryString] = useState(null);
    const [shareLink, setShareLink] = useState(null); 

    const getDataHandler = async (event) => { //API call to get data from accretion-backend 
        if (event) {
            event.preventDefault();
        }
        setQueryString(`?address1=${addressInfo.street_number}%20${addressInfo.route}%20${addressInfo.unit}` + 
                        `&address2=${addressInfo.locality}%20${addressInfo.state}%20${addressInfo.zipcode}`); 
        
        // set the shareLink
        setShareLink(url_database_view + queryString); 
                        
        try {
            const response = await fetch(
                url_accretionDB_getData + 
                queryString, 
                {
                    method: "GET",                 
                }
            );
    
            if (response.ok) {
                const data = await response.json();                     
                setFetchStatus(true);
                setDataATTOM(data);                 
                setPropertyID(data.status.attomId);
                setResponseStatus(true);
                // generate dataPNG
            } else {
                console.log("Failed to fetch data: ", response.statusText); 
                setFetchStatus(false); 
                setResponseStatus(true);
            }
        }
        catch (error) {
            console.log("Error during fetch: ", error);            
            setFetchStatus(false);            
        }
    } 

    const uploadPNGHandler = async (event) => { //API call to get data from accretion-backend                
        if (event) {
            event.preventDefault();
        }    

        try {
            const blob = await (await fetch(dataPNG)).blob(); 
            const formData = new FormData(); 
            formData.append('image', blob, 'image.png'); 
            formData.append('propertyID', propertyID);
            
            const response = await fetch(url_accretionDB_postPNG, {
                method: 'POST',
                body: formData, 
            }); 

            if (response.ok) {
                const data = await response.json(); 
                console.log("===database visual PNG link===", data); 
            } else {
                console.error("Failed upload data visual to backend"); 
            }            
        } 
        catch (error) {
            console.error("Error during post to backend: ", error);      
        }

        
    } 
    
    // trigger getDataHandler when the addressInfo change 
    useEffect( () => {
        getDataHandler();
    }, [addressInfo])

    // trigger uploadPNGhandler when dataPNG is updated 
    useEffect( () => {
        uploadPNGHandler()
    }, [dataPNG])

    return (
        <div className="row">             
            {dataATTOM != null && (
                <div> 
                    <div> 
                        {/* <CreateDeedVisualAccretionDB dataJson={dataATTOM} setDataPNG={setDataPNG}/>  */}
                        <CreateDeedVisualD3 dataJson={dataATTOM} /> 
                        <div style={{display:"none"}}>
                            <CreateDeedVisualPNG dataJson={dataATTOM} setDataPNG={setDataPNG}/> 
                        </div>
                        <img src={dataPNG}/>
                    </div>
                    <div className="share-save-edit"> 
                        <div className="row">
                            <Share shareLink={shareLink} dataPNG={dataPNG} />
                            <Save />
                            <Edit />                                                                            
                        </div>
                    
                    </div> 
                    
                </div>
            )} 
        </div>
    )
};

// Stripe Payment Info
{/* <div className="row">
                <div className="column">
                    <a href="https://buy.stripe.com/aEUg1IczadSldQQ8ww">
                        <Button id="button-database-demo" >
                            Single Search $1.99
                        </Button>
                    </a>
                </div>
                
                <div className="column">
                    <a href="https://buy.stripe.com/8wM02K8iU6pT2888wx">
                        <Button id="button-database-demo">
                            Membership $10.99
                        </Button>
                    </a>
                </div>                
            </div> */}

            {/* <div className="row">
                <div className="column">
                    <Link to="/contact-us">
                        <Button id="button-database-demo">
                            Contact Us To Get The Latest Update
                        </Button>
                    </Link>
                </div>                
            </div> */}
