import Lottie from 'react-lottie';
import AnimationDatabase from "../../company/animation-database.json"; 

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationDatabase,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }    
};

export default function Loading () {

    return (
        <div className='row'>            
            <div id='animation' style={{width:"80%", maxWidth:"400px"}}>
                <div> Loading AccretionDB... </div>
                <Lottie options={animationOptions}/>
            </div>  
        </div>
    )
}