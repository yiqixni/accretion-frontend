import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'; 
import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

import './DatabaseDemo.css';

const API_key_google_maps = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; 

const MapAutocomplete = ({ updateAddressInfo }) => {
  const [searchBox, setSearchBox] = useState(null);

  // states for ATTOM API
  const [addressInfo, setAddressInfo] = useState({
    "street_number": "",
    "route": "", 
    "locality": "",
    "unit": "",
    "state": "",
    "zipcode": ""
  }); 
  const updateAddress = (key, val) => {
    setAddressInfo(prevState => ({
      ...prevState, 
      [key]: val
    }));
  }
  
  const [unit, setUnit] = useState('');

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_key_google_maps,
    libraries: ['places'],
  });

  const onLoad = (ref) => {
    setSearchBox(ref);
    if (ref) {
      const usaBounds = {
        east: -66.93457,
        west: -124.831,
        north: 49.384358,
        south: 24.396308,
      };
      ref.setBounds(usaBounds);
    }    
  };

  const onPlacesChanged = useCallback(() => {
    if (!searchBox) {
      console.error("searchbox ref is null");
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
        place.address_components.forEach(component => {
          if (component.types.includes('street_number')) {          
            updateAddress("street_number", component.long_name); 
          } else if (component.types.includes('route')) {
            updateAddress("route", component.long_name); 
          } else if (component.types.includes('locality')) {
            updateAddress("locality", component.long_name); 
          } else if (component.types.includes('administrative_area_level_1')) {
            updateAddress("state", component.long_name); 
          } else if (component.types.includes('postal_code')) {
            updateAddress("zipcode", component.long_name); 
          } 
        });      
      }
    }
  },[searchBox]);

  const submitSearch = () => {      
    if (unit) {
      updateAddress("unit", unit)
    }    
    updateAddressInfo(addressInfo);
  }

  const handleKeyStroke = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  }

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
                placeholder="  Enter Address" 
                className='search-bar'                                 
              />
            </StandaloneSearchBox>
          </div>
          <div id='map-autocomp-col' style={{flex:"1.5"}}>
            <input 
              type='text' 
              placeholder='  Unit'
              className='search-bar'   
              value={unit}
              onChange={(e) => {
                updateAddress("unit", e.target.value);
                setUnit(e.target.value);
              }} 
              onKeyDown={handleKeyStroke}
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