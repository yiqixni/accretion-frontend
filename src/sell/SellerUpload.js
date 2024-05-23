import React, {useState, useEffect} from "react";  

import Config from "../Config";
import './UploadForm.css'

export default function SellerUpload() {
    
    const [propertyData, setPropertyData] = useState({
        "address": "",
        "description": "", 
        "asking_price": "", 
        "shares": ""
    });

    const [images, setImages] = useState([]); 
    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        const jwt = JSON.parse(localStorage.getItem('jwt'));

        const formData = new FormData(); 

        formData.append('address', propertyData.address);
        formData.append('description', propertyData.description);
        formData.append('asking_price', propertyData.asking_price);
        formData.append('shares', propertyData.shares);

        images.forEach((image, index) => {
            formData.append("uploaded_images", image);
        });
        
        
        console.log("formData:", formData);

        const response = await fetch(
            Config.API_URL + "api/sell/", 
            {
                method: 'POST', 
                headers: {
                    // omitting the content-type let browser automatically set the boundry for multipart/form-data
                    'Accept': 'application/json', 
                    'Authorization': `JWT ${jwt.access}`
                },  
                body: formData
            }
        )

        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        }
    }
    
    const changeHandler = (event) => {
        setPropertyData({
            ...propertyData, 
            [event.target.name]: event.target.value
        });
    } 

    const imageChangeHandler = (event) => { 
        setImages([
            ...images, 
            event.target.files[0]]); 
    }
    
    return (
        <div className="upload-form">
            <h3>Upload your property</h3>
            <form onSubmit={submitHandler}> 
                <div>
                    <label>Address</label>  
                    <input type="text" 
                    name="address" 
                    onChange={changeHandler} 
                    value={propertyData.address} />  
                </div>
                <div>
                    <label>Description</label>  
                    <input type="text" 
                    name="description" 
                    onChange={changeHandler} 
                    value={propertyData.description} />  
                </div>
                <div>
                    <label>Asking price</label>  
                    <input type="text" 
                    name="asking_price" 
                    onChange={changeHandler} 
                    value={propertyData.asking_price} />    
                </div>
                <div>
                    <label>Shares to sell</label>  
                    <input type="text" 
                    name="shares" 
                    onChange={changeHandler} 
                    value={propertyData.shares} />    
                </div>
                <div>
                    <label>Images</label>  
                    <input type="file" 
                    name="images" 
                    accept="image/*" 
                    onChange={imageChangeHandler}
                    multiple/>    
                </div>

                <button type="submit">Submit</button>   
            </form> 
        </div>
    )

}

