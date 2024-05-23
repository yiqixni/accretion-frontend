import React from 'react';
import { InlineWidget } from 'react-calendly';

import './ContactUs.css'; 

const CalendlyComponent = () => {
    return (
        <div>
            <div className='row' style={{marginTop: '5svh'}}>                            
                <div id='title' style={{fontSize:'120%'}}>
                    Book a meeting
                </div>
                <InlineWidget
                    url="https://calendly.com/yiqinix/15min"
                    styles={{
                        height: '1020px',                        
                        margin: 'auto',   
                        maxHeight: '80svh',                     
                    }}
                />
            </div>            
        </div>
    );
};

export default CalendlyComponent;
