
// import './Company.css';
import './Leadership.css';
import Headshot from './headshot-ceo.jpg';

const mailtoUrl = "mailto:yiqinix@gmail.com";

export default function Leadership () {

    return (
        <div>
            <div className="leadership">
                <div className='row'>
                    <div id='title'> Leadership </div>
                </div>
                
                <div className='row'>
                    <div id='small-text'> Meet the executive team</div>
                </div>
                
                <div className="row">                    
                    
                    <div className='column' style={{flex:1}}>
                        <img src={Headshot} id='intro-photo'/>
                    </div>
                    
                    <div className="column" style={{flex:1.5}}>
                        <div id='intro-title'>
                            Yiqi Ni | Founder & CEO
                        </div>
                        <div id='text'>                            
                            Yiqi is the founder and CEO of Accretion LLC. 
                            After graduating in 2023 from MIT with a Ph.D. degree in physics, 
                            Yiqi founded Accretion with a passion for financial statistics, physics models and experimentation. 
                            Yiqi created Accretion to lower the barrier to entry into the housing market, 
                            by empowering people with tools and data that were previously limited to a few real estate professionals. 
                            Yiqi is dedicated to helping more people achieve financial freedom via the Accretion platform. 
                            You can connect directly with Yiqi through email. 
                        </div>
                        
                        <a href={mailtoUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                            <div id='contact-yiqi'> 
                                Email Yiqi
                            </div> 
                        </a>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}