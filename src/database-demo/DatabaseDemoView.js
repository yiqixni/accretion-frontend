import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CreateDeedVisualAccretionDB from './d3-attom-demo/CreateVisualAccretionDB';
import TwitterCard from './social-media-share/TwitterCard';

import './DatabaseDemo.css'

export default function DatabaseDemoView () {
    const location = useLocation(); 
    const [propertyID, setPropertyID] = useState(null);
    const [dataATTOM, setDataATTOM] = useState(null);
    const [propertyData, setPropertyData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [fetchStatus, setFetchStatus] = useState(null); 
    const [dataPNG, setDataPNG] = useState();
    
    const url_accretionDB_getDataView = "http://127.0.0.1:8000/api/database-visualization/get-data-view/";

    const getQueryParam = (search) => {
        return new URLSearchParams(search); 
    }; 

    const getDataHandler = async (event) => { //API call to get data from accretion-backend
        if (event) {
            event.preventDefault();
        }                
        try {
            const response = await fetch(                
                url_accretionDB_getDataView + `?propertyid=${propertyID}`,
                {
                    method: "GET",                 
                }
            );
    
            if (response.ok) {
                const data = await response.json();                 
                setPropertyData(data);
                setDataATTOM(data.data);
                setFetchStatus(true);
            } else {
                console.error("Failed to fetch data: ", response.statusText); 
                setFetchStatus(false); 
            }
        }
        catch (error) {
            console.error("Error during fetch: ", error);            
            setFetchStatus(false);            
        }
    } 

    useEffect(() => {
        const queryParam = getQueryParam(location.search);
        const id = queryParam.get("propertyid");
        setPropertyID(id);

    }, [location.search]);

    useEffect(() => {
        if (propertyID) {
            getDataHandler(); 
        }
        setLoading(false);
    }, [propertyID])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className='database-demo'>
            {fetchStatus && (
                <TwitterCard propertyData={propertyData} />
            )}
            <div className='row'>
                <div id='title'>
                    Accretion Database
                </div>
            </div>
            {fetchStatus && (
                <div>
                    <div className='row'>
                        <div id='address'>
                            {dataATTOM.property[0].address.oneLine}
                        </div>
                    </div>
                    <div className='row'> 
                        <CreateDeedVisualAccretionDB dataJson={dataATTOM} setDataPNG={setDataPNG}/> 
                    </div>
                </div>
            )}
        </div>
    )
}