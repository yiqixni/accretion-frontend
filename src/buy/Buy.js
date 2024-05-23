/* 
Buy: fetch GET to get all available PropertyInfos and present them in a grid. 
*/

import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';

import Config from '../Config';
import ContactUs from '../contact-us/ContactUs';
import './Buy.css';

export default function Buy () {
    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const response = await fetch(
                    Config.API_URL_forDev + "api/buy/",
                    {
                        method: "GET", 
                        headers: {
                            // "Authorization": `JWT ${jwt.access}` 
                        }
                    }
                )
                const data = await response.json(); 
                setPropertyData(data); 
            } 
            catch (error) {
                console.log(error)
            }
        }

        getProperties(); 

    },[])
    

    return (
        <div className='buy'>
            <Helmet>
                <title>Buy | Accretion</title>
            </Helmet>
            <div>
                <h3>Properties on sale</h3>
            </div>
            <div className="property-grid">
                {
                    propertyData.map((propertyInfo)=>(
                        <Link to={`/buy/${propertyInfo.id}`} key={propertyInfo.id}>
                            <div className="property-card" >
                            <img src={propertyInfo.images[0].image}/>
                            <p>Address: {propertyInfo.address}</p>
                            <p>Asking price: {propertyInfo.asking_price}</p>
                            <p>Shares for sale: {propertyInfo.shares}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div>
                <h3>Don't see the property you want to buy?</h3>
                <ContactUs />
            </div>
            
        </div>
    )
}