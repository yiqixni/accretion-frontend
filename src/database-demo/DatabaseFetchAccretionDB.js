import React, {useState, useEffect} from "react";  
import CreateDeedVisualAttomAPI from "./d3-attom-demo/CreateVisualAttomAPI";

const API_key_Attoms= process.env.REACT_APP_ATTOMS_API_KEY; 
const url_accretionDB = "http://127.0.0.1:8000/api/database-visualization/";

export default function DatabaseFetchAccretionDB({ addressInfo, setFetchStatus }) {    
    
    const [dataATTOM, setDataATTOM] = useState(null); 
        
    const submitHandler = async (event) => {
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
    
    // trigger submitHandler when the addressInfo change 
    useEffect( () => {
        submitHandler();
    }, [addressInfo])

    return (
        <div className="row">             
            {dataATTOM != null && (
                <CreateDeedVisualAttomAPI dataJson={dataATTOM} visualWidth={600}/>                
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
