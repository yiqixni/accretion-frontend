import { useRef, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import AnimationDatabase2 from "./animation-database-2.json"
import AnimationDatabase3 from "./animation-database-3.json"

import './AboutUs.css'; 

export default function AboutUs() {
    const containerRef = useRef(null); 
    const [fontSize, setFontSize] = useState(16); // Initial font size
    const [containerWidth, setContainerWidth] = useState(0); // Initial container width

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
        const newFontSize = Math.max(14, containerWidth / 52); // Adjust the division value for desired font size responsiveness
        setFontSize(newFontSize);
    }, [containerWidth]);

    const animationOptions2 = {
        loop: true,
        autoplay: true,
        animationData: AnimationDatabase2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }    
    };

    const animationOptions3 = {
        loop: true,
        autoplay: true,
        animationData: AnimationDatabase3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }    
    };

    return (
        <div>
            <div className="about-us">
                <div className='row'>                    
                    <div id="title">                        
                        About Us
                    </div>
                </div>
                
                <div className='row'>
                    <div id="small-text">
                        Learn more about our company 
                    </div>  
                </div>
                                              
                <div className="row">

                    <div className="column-left">                                                
                        <div id="headline"> Our Mission </div>                         
                            <div id="text"> 
                                At Accretion, we empower investors through innovative technology. 
                                We are revolutionizing the real estate industry by building a cutting-edge database system that streamlines deal flow and democratizes data accessibility. 
                                Our transparent marketplace lowers barriers to the housing market, ensuring fair and equal access for all.
                                <br/>
                                <br/>                        
                                We are committed to creating the most comprehensive and centralized real estate database, 
                                leveraging economies of scale to significantly reduce deal closing costs. 
                                We strive to transform the way real estate transactions are conducted, making the process more efficient, transparent, and accessible to everyone.                         
                            </div>                        
                    </div>

                    <div className="column-right" style={{overflow:"hidden"}} id='animation'>                         
                        <Lottie options={animationOptions2}/>                        
                    </div>         

                </div>

                <div className="row" ref={containerRef}>
                    <div className="column-left" id="desktop">
                        <Lottie options={animationOptions3}/>
                    </div>

                    <div className="column-right">
                        <div id="headline" > What we do </div> 

                        <div id="text" >
                            We are a fintech startup building product and services for the real estate industry. 
                            Accretion is building the best modern database system designed to streamline the real estate closing process. 
                            Our innovative solution aims to enhance efficiency, transparency, and accessibility within the sector.
                            <br/>
                            <br/>
                            Currently in the product-market fit stage, we are actively refining our platform to meet the evolving needs of the market. 
                            We invite you to join us on this transformative journey and shape the future of real estate investment together.
                            Contact us, share your insights, and be a part of the revolution that will redefine the way real estate transactions are conducted. 
                            Together, we can unlock new possibilities and drive positive change within the housing market.                            
                        </div>
                    </div>      
                    <div className="column-left" id="mobile">
                        <Lottie options={animationOptions3}/>
                    </div>              
                </div>
            </div>
        </div>
    )
}
