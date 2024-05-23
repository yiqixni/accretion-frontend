import React, {useState, useEffect} from "react";  
import ContactUs from "../contact-us/ContactUs";
import Config from "../Config";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function DatabaseFetch({ addressData, setDeedRecords }) {    
    let addressInfo = {
        streetNumber: '',
        streetName: '',
        city: '',
        county: '',
        state: ''
    };

    addressData.address_components.forEach(component => {
        if (component.types.includes('street_number')) {
            addressInfo.streetNumber = component.long_name;
        } else if (component.types.includes('route')) {
            addressInfo.streetName = component.long_name;
        } else if (component.types.includes('locality')) {
            addressInfo.city = component.long_name;
        } else if (component.types.includes('administrative_area_level_2')) {
            addressInfo.county = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
            addressInfo.state = component.long_name;
        }
    });
        
    const submitHandler = async (event) => {
        if (event) {
            event.preventDefault();
        }                
        try {
            const response = await fetch(
                Config.API_URL_forDev + 
                "api/database/" + 
                `?state=${addressInfo.state}&?county=${addressInfo.county}&?town=${addressInfo.city}&?street_name=${addressInfo.streetName}&?stree_number=${addressInfo.streetNumber}`, 
                {
                    method: "GET",                 
                    headers: {                 
                    },
                }
            );
    
            if (response.ok) {
                const data = await response.json(); 
                // console.log(data);
                setDeedRecords(data); 
            }
        }
        catch (error) {
            // console.log(error);
        }
    }            
    
    // trigger submitHandler when the addressData change 
    useEffect( () => {
        submitHandler();
    }, [addressData])

    return (
        <div className="row">
            <div className="row">
            {addressInfo.state!="Massachusetts" && (
                <div>
                    <p>We are rolling out service to {addressInfo.state} soon!</p>
                    <p>Please contact us to get the latest update.</p>                    
                </div>
            )}
            {addressInfo.state=="Massachusetts" && (
                <div>
                    <p>We are currently building service to {addressInfo.state} as fast as we can!</p>
                    <p>Please contact us to learn more.</p>                    
                </div>                
            )}            
            </div>
            
            <div className="row">
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
            </div>

            <div className="row">
                <div className="column">
                    <Link to="/contact-us">
                        <Button id="button-database-demo">
                            Contact Us To Get The Latest Update
                        </Button>
                    </Link>
                </div>                
            </div>
            
        </div>
    )
};

