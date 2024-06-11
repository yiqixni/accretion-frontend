import { useRef, useState, useEffect } from 'react';
import CalendlyComponent from './CalendlyComponent';
import MessageUsComponent from './MessageUsComponent';

// import CompanyContactCard from "./CompanyContactCard"; 
// import ContactForm from "./ContactForm";

import './ContactUs.css';

export default function ContactUs ({ message }) {
    if (!message) {
        message = "Please let us know how we can assist you. Your feedback allows us to build a modern database and marketplace for a more efficient housing market."
    }
    const containerRef = useRef(null); 
    const [fontSize, setFontSize] = useState(16); // Initial font size
    const [containerWidth, setContainerWidth] = useState(0); // Initial container width

    const emailAddress = "support@accretion.life";
    const subject = "Message to Accretion";
    const body = "";
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const phoneNumber = "720-225-7668";
    const telUrl = `tel:${phoneNumber}`;

    useEffect(() => {
        // Function to update container width
        const updateContainerWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        
        // Update container width on mount and window resize
        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);
    
        // Cleanup
        return () => {
            window.removeEventListener('resize', updateContainerWidth);
        };
    }, []);
    
    // Update font size when container width changes
    useEffect(() => {
        // Calculate font size based on container width        
        const newFontSize = Math.max(14, containerWidth / 40); // Adjust the division value for desired font size responsiveness
        // console.log('Container Width:', containerWidth);
        // console.log('New Font Size:', newFontSize);
        setFontSize(Math.min(newFontSize, 25));        
    }, [containerWidth]);
    

    return (
        <div className="contact-us" ref={containerRef}>            
            <div className='row' >
                <div id='title'>
                    Contact Us
                </div>   
            </div>            
            
            <div className='row'>
                <div id='text'>
                    {message}
                </div>
            </div> 

            <div className='row' style={{marginBottom: "0svh"}}>
                <MessageUsComponent/>
            </div>

            <div className='row' style={{marginTop: '5svh'}}>                            
                <div id='title' style={{fontSize:'120%', marginBottom:"5svh"}}>
                    Reach Out To Us
                </div>
            </div>

            <div className='row'>
                <div className='line-item'> 
                    <a href={mailtoUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                        {`email us: ${emailAddress}`} 
                    </a>
                </div>
            </div>

            <div className='row'>
                <div className='line-item'>
                    <a href={telUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                        {`call or text us: ${phoneNumber}`}
                    </a>
                </div>
            </div>

            <div className='row'>
                <CalendlyComponent />
            </div>            

        </div>
    )
}
