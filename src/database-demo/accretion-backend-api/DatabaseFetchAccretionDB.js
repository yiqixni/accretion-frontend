import { useEffect } from "react";  
import "../DatabaseDemo.css";

// API URL for get json data from backend
const url_accretionDB_getData = process.env.REACT_APP_BACKEND_DOMAIN + "/api/database-visualization/get-data/"; // for local dev testing
// URL for Database share 
const url_database_share = process.env.REACT_APP_HOST_DOMAIN + "/database/demo/share/"; 

export default function DatabaseFetchAccretionDB({ addressInfo, setFetchStatus, setResponseStatus, setDataJSON, setShareLink }) {        
    
    const getDataHandler = async (event) => { //API call to get data from accretion-backend 
        if (event) {
            event.preventDefault();
        }

        if (!addressInfo) {
            console.error("DatabaseFetch: addressInfo is null");
            return null;
        }

        const queryString = `?address1=${addressInfo.street_number}%20${addressInfo.route}%20${addressInfo.unit}` + 
                            `&address2=${addressInfo.locality}%20${addressInfo.state}%20${addressInfo.zipcode}`;

        // set the shareLink
        const encodedQueryString =  `?address1=${encodeURIComponent(addressInfo.street_number)}%20${encodeURIComponent(addressInfo.route)}%20${encodeURIComponent(addressInfo.unit)}` + 
                                    `&address2=${encodeURIComponent(addressInfo.locality)}%20${encodeURIComponent(addressInfo.state)}%20${addressInfo.zipcode}`;
        setShareLink(url_database_share + encodedQueryString); 
        
        if (queryString == null) {            
            console.error("DatabaseFetch: queryString is null");
            return null;
        }
        
        try {
            console.log("DatabaseFetch: Make API call to AccretionDB...");
            const response = await fetch(
                url_accretionDB_getData + 
                queryString, 
                {
                    method: "GET",                 
                }
            );
            console.log("DatabaseFetch: Complete API call to AccretionDB")
            if (response.ok) {
                const data = await response.json();                     
                setFetchStatus(true);
                setDataJSON(data);                                 
                setResponseStatus(true);                 
            } else {
                console.error("Failed to fetch data: ", response.statusText); 
                setFetchStatus(false); 
                setResponseStatus(true);
            }
        }
        catch (error) {
            console.error("Error during fetch: ", error);            
            setFetchStatus(false);     
            setResponseStatus(true);       
        }
    }

    // trigger getDataHandler when the addressInfo change 
    useEffect(() => {
        if (addressInfo) {
            getDataHandler();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressInfo]);

    return null;
};

// // Stripe Payment Info
// {/* <div className="row">
//                 <div className="column">
//                     <a href="https://buy.stripe.com/aEUg1IczadSldQQ8ww">
//                         <Button id="button-database-demo" >
//                             Single Search $1.99
//                         </Button>
//                     </a>
//                 </div>
                
//                 <div className="column">
//                     <a href="https://buy.stripe.com/8wM02K8iU6pT2888wx">
//                         <Button id="button-database-demo">
//                             Membership $10.99
//                         </Button>
//                     </a>
//                 </div>                
//             </div> */}

//             {/* <div className="row">
//                 <div className="column">
//                     <Link to="/contact-us">
//                         <Button id="button-database-demo">
//                             Contact Us To Get The Latest Update
//                         </Button>
//                     </Link>
//                 </div>                
//             </div> */}


