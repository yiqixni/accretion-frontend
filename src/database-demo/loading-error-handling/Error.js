import Lottie from 'react-lottie';
import NotFound from "./animation-lotttie/not-found.json";
import ContactUsOverlay from '../../contact-us/ContactUsOverlay';

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }    
};

export default function Error () {

    return (
        <div className='row' style={{maxWidth:"600px"}}>
            <div> Oops, we can't find your property in Accretion Database... </div>
            <div id='animation' style={{maxWidth:"300px"}}>                
                <Lottie options={animationOptions}/>
            </div>  
            <div style={{marginBottom:"2svh"}}> 
                Contact Us Accretion Support Team 
            </div>
            <ContactUsOverlay/>
        </div>
    )
}