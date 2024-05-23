import Lottie from 'react-lottie';
// import './Company.css';
import './Career.css';

import AnimationDatabase from "./animation-database.json"

const mailtoUrl = "mailto:yiqinix@gmail.com";
const linkedInUrl = "https://www.linkedin.com/company/accretion-database/jobs";

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationDatabase,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }    
};

export default function Career () {

    return (        
        <div className="career">
            <div className='row'>
                <div id='title'> Career </div>
            </div>
            
            <div className='row'>
                <div id='small-text'> Join us to build the best platform for the housing market</div>
            </div>
            
            
            <div className='row'>
                
                <div className='column'>
                    <div id='slogan'>
                        Together, there is nothing we can't build. 
                    </div>

                    <div id='animation'>
                        <Lottie options={animationOptions}/>
                    </div>                                                
                </div>
                
                <div className='column'>
                    <div id='text'>
                        At Accretion, we believe taking risks in building new things, 
                        and in bringing unique perspectives to all that we do. 
                        Unlock your potential at Accretion. Where bold innovators build groundbreaking real estate data solutions. 
                        Together we can build, sell, support world's leading developer for real estate data system. 
                    </div>

                    <div>    
                        <a href={mailtoUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                            <div id='contact-yiqi'> 
                                Email Your Resume To Us
                            </div> 
                        </a>
                    </div>

                    <div>
                        <a href={linkedInUrl} 
                                target="_blank"
                                rel="noopener noreferrer" style={{ textDecoration:'none', color: 'inherit'}}>
                            <div id='contact-yiqi'> 
                                Find Us On LinkedIn
                            </div> 
                        </a>
                    </div>
                </div>                    
            </div>                            
        </div>        
    )
}