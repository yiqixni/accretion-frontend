import Lottie from 'react-lottie';
import './AboutUs.css';

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
        <div>
            <div className="career">
                <div id='title'> Career </div>
                <div id='small-text'> Join us to build the best fin-tech startup</div>
                
                <div className='career-introduction'>
                    
                    <div id='slogan'>
                        Together, there is nothing we can't build. 
                        <div id='animation'>
                            <Lottie options={animationOptions}/>
                        </div>                        
                    </div>

                    <div id='text'>
                        At Accretion, we believe taking risks in building new things, 
                        and in bringing unique perspectives to all that we do. 
                        Unlock your potential at Accretion. Where bold innovators build groundbreaking real estate data solutions. 
                        Together we can build, sell, support world's leading developer for real estate data system. 
                        
                        <a href={mailtoUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                            <div id='contact-yiqi'> 
                                Email to join us
                            </div> 
                        </a>

                        <a href={linkedInUrl} 
                                target="_blank"
                                rel="noopener noreferrer" style={{ textDecoration:'none', color: 'inherit'}}>
                            <div id='contact-yiqi'> 
                                LinkedIn
                            </div> 
                        </a>
                    </div>
                </div>                            
            </div>
        </div>
    )
}