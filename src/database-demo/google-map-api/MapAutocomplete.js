import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'; 
import React, { useState, useCallback, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

import '../DatabaseDemo.css';

const API_key_google_maps = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; 

const libraries = ['places'];

const MapAutocomplete = ({ addressInfo, setAddressInfo, setResponseStatus }) => {
  const [searchBox, setSearchBox] = useState(null);  

  // states for getting new address from Google Maps API
  const [newAddressInfo, setNewAddressInfo] = useState({
    "street_number": "",
    "route": "", 
    "locality": "",
    "unit": "",
    "state": "",
    "zipcode": ""
  }); 

  const updateNewAddressInfo = (key, val) => {
    setNewAddressInfo(prevState => ({
      ...prevState, 
      [key]: val
    }));
  }
  
  const [unit, setUnit] = useState('');

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_key_google_maps,
    libraries,
  });

  const onLoad = (ref) => {    
    if (ref) {
      const usaBounds = {
        east: -66.93457,
        west: -124.831,
        north: 49.384358,
        south: 24.396308,
      };
      ref.setBounds(usaBounds);
      setSearchBox(ref);      
    } else {
      console.error("ONLOAD NO REF FOUND");
    }   
  };

  const onPlacesChanged = useCallback(() => {
    if (!searchBox) {
      console.error("onPlacesChanged: searchbox ref is null");
      return;
    }
    if (typeof searchBox.getPlaces !== 'function') {
      console.error("searchBox.getPlaces is not a function.");
      return;
    }
    const places = searchBox.getPlaces();
    if (places.length > 0) {                  
      if (places && places.length > 0) {
        const place = places[0]; 
        console.log("onPlacesChanged triggered, place=", place)
        if (place && place.address_components) {                                             
          place.address_components.forEach(component => {
            if (component.types.includes('street_number')) {          
              updateNewAddressInfo("street_number", component.long_name); 
            } else if (component.types.includes('route')) {
              updateNewAddressInfo("route", component.long_name); 
            } else if (component.types.includes('locality')) {
              updateNewAddressInfo("locality", component.long_name); 
            } else if (component.types.includes('administrative_area_level_1')) {
              updateNewAddressInfo("state", component.long_name); 
            } else if (component.types.includes('postal_code')) {
              updateNewAddressInfo("zipcode", component.long_name); 
            } 
          });          
        }     
      }
    }
  },[searchBox]);


  const submitSearch = () => {      
    if (unit) {
      updateNewAddressInfo("unit", unit);
    }    

    if (JSON.stringify(newAddressInfo) !== JSON.stringify(addressInfo)) {
      setAddressInfo(newAddressInfo);
      setResponseStatus(false);
    } else {
      console.warn("MapAutoComplete: search button clicked, enter a new address for search.");
    }
  }

  const handleKeyStroke = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  }

  useEffect(() => {
    if (searchBox) {
      console.log('searchBox is set:', searchBox);
    }
  }, [searchBox]);


  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }


  return (    
    <div >
        <div className='map-autocomp-row'>
          <div id='map-autocomp-col' style={{flex:6}}>
            <StandaloneSearchBox
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}        
              options={{
                types: ['address'],
                componentRestrictions: { country: 'us' },
                fields: ['address_components', 'geometry', 'icon', 'name'],
              }}                  
            >
              <input
                type="text"
                placeholder="Enter Address" 
                className='search-bar'      
                style={{paddingLeft:"10px"}}                           
              />
            </StandaloneSearchBox>
          </div>
          <div id='map-autocomp-col' style={{flex:"1.5"}}>
            <input 
              type='text' 
              placeholder='Unit'
              className='search-bar'   
              value={unit}
              onChange={(e) => {
                updateNewAddressInfo("unit", e.target.value);
                setUnit(e.target.value);                
              }} 
              onKeyDown={handleKeyStroke}
              style={{paddingLeft:"10px"}}    
            />   
          </div>  
          <div id='map-autocomp-col' style={{flex:"0.5"}}>
            <Button 
              variant='outline-primary' id='search-button'
              onClick={submitSearch}>
              Search
            </Button>

            <Button 
              variant='outline-primary' id='search-button-mobile'
              onClick={submitSearch}>
              <FaSearch/>
            </Button>
          </div>
        </div>
    </div>           
  );
};

export default MapAutocomplete;
