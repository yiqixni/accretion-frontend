import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from 'react-bootstrap/Button';

import './ContactUs.css'; 

export default function MessageUsComponent() {  
    
    const [state, handleSubmit] = useForm("mdoqpnlr");

    if (state.succeeded) {
        return (
            <div className='row'>
                <div id='text'>
                    Thanks for contacting us! 
                    <br/>
                    Our support team will get back to you within 2 business days. 
                </div>
            </div>
        );
    }

    return (
        <div className='contact-us' style={{marginBottom: "0svh"}}>
        <form onSubmit={handleSubmit} className='formspree'>            

            <div className='row'>                
                <input
                    className='form-input'
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Your Email'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className='row'>
                <input
                    className='form-input'                    
                    type="text"
                    name="name"
                    placeholder='Your Name'
                />
            </div>

            <div className='row'>
                <input
                    className='form-input'                    
                    type="tel"
                    name="phone-number"
                    placeholder='Phone Number'
                />
            </div>
            
            <div className='row'>                
                <textarea
                    className='form-input'
                    id="message"
                    name="message"
                    placeholder="Tell Us More About How We can Help"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>

            <div className='row'>
                <Button type="submit" disabled={state.submitting} id='button-form-submit'>
                    Submit
                </Button>
            </div>
            
        </form>
        </div>
    );
};
