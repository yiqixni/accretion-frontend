import React, { useState } from 'react';
import Config from '../Config';

export default function ContactForm() {
    const [contactData, setContactData] = useState({
        "name": "",
        "email": "", 
        "phone_number": "", 
        "message": "", 
    });

    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        // useEffect(() => {
        //     fetchItems();
        // }, []);
        const response = await fetch(
            Config.API_URL + "api/contact-us/", 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(contactData)
            }
        )

        console.log(response)
    }
    
    const changeHandler = (event) => {
        setContactData({
            ...contactData, 
            [event.target.name]: event.target.value
        });
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}> 
                <div>
                    <label>Name</label>  
                    <input type="text" name="name" onChange={changeHandler} value={contactData.name} />  
                </div>
                <div>
                    <label>Email</label>  
                    <input type="email" name="email" onChange={changeHandler} value={contactData.email} />  
                </div>
                <div>
                    <label>Phone Number</label>  
                    <input type="tel" name="phone_number" onChange={changeHandler} value={contactData.phone_number} />    
                </div>
                <div>
                    <label>Message</label>  
                    <input type="text" name="message" onChange={changeHandler} value={contactData.message} />    
                </div>
                <button type="submit">Submit</button>   
            </form> 
        </div>
    )

}
