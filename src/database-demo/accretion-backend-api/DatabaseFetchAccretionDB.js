import {useState, useEffect} from "react";  
import "../DatabaseDemo.css";

const url_accretionDB_getData = "https://backend-1.accretion.life/api/database-visualization/get-data/";
const url_database_view = process.env.REACT_APP_LOCAL_HOST + "/database/demo/view/"; 

export default function DatabaseFetchAccretionDB({ addressInfo, setFetchStatus, setResponseStatus, setDataJSON }) {    
    console.log("Database fetch addressInfo:", addressInfo);
    if (!addressInfo) {
        console.error("DatabaseFetch: addressInfo is null");
        return null;
    }
    // const [queryString, setQueryString] = useState(null);
    const [shareLink, setShareLink] = useState(null); 

    const getDataHandler = async (event) => { //API call to get data from accretion-backend 
        if (event) {
            event.preventDefault();
        }
        const queryString = `?address1=${addressInfo.street_number}%20${addressInfo.route}%20${addressInfo.unit}` + 
                            `&address2=${addressInfo.locality}%20${addressInfo.state}%20${addressInfo.zipcode}`;
        
        // setQueryString(queryStringTemp); 
        
        // set the shareLink
        setShareLink(url_database_view + queryString); 
        
        if (queryString == null) {            
            console.error("DatabaseFetch: set query string is null");
            return null;
        }
        
        try {
            console.log("DatabaseFetch: MAKING AN API CALL");
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
                setDataJSON(data);                                 
                setResponseStatus(true);                 
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

    // trigger getDataHandler when the addressInfo change 
    useEffect( () => {
        getDataHandler();
    }, [addressInfo])

    return null;
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
