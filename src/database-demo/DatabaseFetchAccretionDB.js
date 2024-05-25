import React, {useState, useEffect} from "react";  
// import CreateDeedVisualAttomAPI from "./d3-attom-demo/CreateVisualAttomAPI";
import CreateDeedVisualAccretionDB from "./d3-attom-demo/CreateVisualAccretionDB";
import { Button } from "react-bootstrap";

// const API_key_Attoms= process.env.REACT_APP_ATTOMS_API_KEY; 
const url_accretionDB = "http://127.0.0.1:8000/api/database-visualization/";
const url_accretionDB_share = "http://127.0.0.1:8000/api/database-visualization-share/";

export default function DatabaseFetchAccretionDB({ addressInfo, setFetchStatus }) {    
    
    const [dataATTOM, setDataATTOM] = useState(null); 
    const [dataPNG, setDataPNG] = useState(null); 
        
    const submitHandler = async (event) => { //API call to get data from accretion-backend
        if (event) {
            event.preventDefault();
        }                
        try {
            const response = await fetch(
                url_accretionDB + 
                `?address1=${addressInfo.street_number}%20${addressInfo.route}%20${addressInfo.unit}` + 
                `&address2=${addressInfo.locality}%20${addressInfo.state}%20${addressInfo.zipcode}`,
                {
                    method: "GET",                 
                }
            );
    
            if (response.ok) {
                const data = await response.json();     
                console.log("=== response data ===", data)
                setFetchStatus(true);
                setDataATTOM(data); 
            } else {
                console.log("Failed to fetch data: ", response.statusText); 
                setFetchStatus(false); 
            }
        }
        catch (error) {
            console.log("Error during fetch: ", error);            
            setFetchStatus(false);            
        }
    } 

    const uploadPNGHandler = async (event) => { //API call to get data from accretion-backend
        console.log("===uploadPNGHandler triggered===");
    } 
    
    // trigger submitHandler when the addressInfo change 
    useEffect( () => {
        submitHandler();
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
                        <CreateDeedVisualAccretionDB dataJson={dataATTOM} setDataPNG={setDataPNG}/> 
                    </div>
                    <div className="row" style={{textAlign:"center"}}>
                        <Button 
                            variant='outline-primary' 
                            id='button-share'
                            style={{maxWidth:"600px", margin:"auto"}}
                            // onClick={{shareHandler}} 
                        >
                            Share
                        </Button> 
                    </div>
                </div>
            )} 
            {dataPNG != null && (
                <img src={dataPNG}/>
            )}
        </div>
    )
};

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
