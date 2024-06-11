import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CreateDeedVisualD3 from './d3-attom-demo/CreateDeedVisualD3';
import TwitterCard from './share-save-edit/TwitterCard';
import Loading from './loading-error-handling/Loading';
import Error from './loading-error-handling/Error';
import Share from './share-save-edit/Share';
import Edit from './share-save-edit/Edit';
import Save from "./share-save-edit/Save.js";

import { Button } from 'react-bootstrap';

import scrollToTop from '../helper/scrollToTop.js';

import './DatabaseDemo.css'

const url_accretionDB_getDataView = process.env.REACT_APP_BACKEND_DOMAIN + "/api/database-visualization/get-data-view/";
const url_shareLink_domain = process.env.REACT_APP_HOST_DOMAIN;

export default function DatabaseDemoView () {
    const location = useLocation(); 
    const [queryString, setQueryString] = useState(null);     
    const [dataJSON, setDataJSON] = useState(null);
    const [pngURL, setPngURL] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [fetchStatus, setFetchStatus] = useState(null);     
        
    const shareLink = url_shareLink_domain + location.pathname + location.search;     

    const getDataHandler = async (event) => { //API call to get data from accretion-backend
        if (event) {
            event.preventDefault();
        }                
        try {
            console.log("DatabaseDemoView: making an API call to backend...", url_accretionDB_getDataView);
            setLoading(true);
            const response = await fetch(                
                url_accretionDB_getDataView + queryString,
                {
                    method: "GET",                 
                }
            );
            console.log("DatabaseDemoView: finish the API call to backend.");
            setLoading(false);
            if (response.ok) {
                const data = await response.json();                                            
                setDataJSON(data.data);     
                setPngURL(data.imageLink);
                setFetchStatus(true);
            } else {
                console.error("Failed to fetch data: ", response.statusText); 
                setFetchStatus(false); 
            }
        }
        catch (error) {
            console.error("Error during fetch: ", error);            
            setFetchStatus(true);            
        }
    } 

    useEffect(() => {        
        setQueryString(location.search); 

    }, [location.search]);

    useEffect(() => {
        if (queryString) {
            getDataHandler(); 
        }        
    }, [queryString])

    return (
        <div className='database-demo'>
            {/* {fetchStatus && (
                <TwitterCard propertyData={propertyData} />
            )} */}
            <div className='row'>
                <div id='title'>
                    Accretion Database
                </div>
            </div>            
            {loading && (
                <Loading/>
            )}
            {(!loading && fetchStatus) && (
                <div>
                    <div className='row'> 
                        <CreateDeedVisualD3 dataJson={dataJSON} /> 
                    </div>
                    <div className="share-save-edit"> 
                        <div className="row">
                            <Share shareLink={shareLink} linkPNG={pngURL}/>
                            <Save />
                            <Edit />                                                                            
                        </div>        
                        <div className='row' style={{maxWidth:"650px", marginTop:"2svh"}}>
                        <Link to='/database/demo' style={{ textDecoration: 'none' }} onClick={scrollToTop}> 
                            <Button
                                variant='outline-primary' 
                                id='button-share'
                            >
                                Return to Search
                            </Button>      
                        </Link>                                 
                        </div>   
                                
                    </div> 
                          
                </div>
                
            )}
            {(!loading && !fetchStatus) && (
                <Error/>
            )}
        </div>
    )
}