import React, { useEffect } from "react";  


const url_accretionDB_postPNG = process.env.REACT_APP_BACKEND_DOMAIN + "/api/database-visualization/post-png/"; 

export default function DatabasePostPNG ({ dataPNG, dataJSON }) {
    
    if (dataPNG == null || dataJSON == null) {
        console.error("DatabasePostPNG: dataPNG or dataJSON is null"); 
        return null;
    }

    const propertyID = dataJSON.status.attomId; 

    //API call to POST PNG to accretion-backend 
    const uploadPNGHandler = async (event) => {                
        if (event) {
            event.preventDefault();
        }    

        try {
            console.log("DatabasePostPNG: making API call to AccretionDB...")
            const blob = await (await fetch(dataPNG)).blob(); 
            const formData = new FormData(); 
            formData.append('image', blob, 'image.png'); 
            formData.append('propertyID', propertyID);
            
            const response = await fetch(url_accretionDB_postPNG, {
                method: 'POST',
                body: formData, 
            }); 
            console.log("DatabasePostPNG: finish API call to AccretionDB")
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

    // trigger uploadPNGhandler when dataPNG is updated 
    useEffect( () => {
        uploadPNGHandler()
    }, [dataPNG])


    return null; 
}