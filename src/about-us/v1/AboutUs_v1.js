import Lottie from 'react-lottie';
import AnimationDatabase2 from "../../company/animation-database-2.json"
import AnimationDatabase3 from "../../company/animation-database-3.json"

import './Company.css'; 

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

export default function AboutUs_v1 () {

    return (
        <div>
            <div className="about-us">
                <div id="title">
                    About Us
                </div>
                <div id="small-text">
                    Learn more about our company 
                </div>

                
                <div className="about-us-container">
                    <div className="column-left">
                        {/* <div id="headline" style={{alignText:"center", justifyContent:"center", flex:1, display:"flex"}}> Our Mission </div>     */}
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

                    <div className="column-right">
                        <div id='animation'>
                            <Lottie options={animationOptions2}/>
                        </div>     
                    </div>                    
                </div>

                <div className="about-us-container">
                    <div className="column-left">
                        <Lottie options={animationOptions3}/>
                    </div>

                    <div className="column-right">
                        <div id="headline"> What we do </div> 

                        <div id="text">
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
                </div>
            </div>
        </div>
    )
}