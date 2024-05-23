import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';

import SliderREITS from './logo-reit/SliderREITS';
import SliderFrac from './logo-fraction-property/SliderFrac';
import SliderWeb3 from './logo-web3/SliderWeb3';

// import MarketplaceDemo from './marketplace-demo/MarketplaceDemo';
import ContactUs from '../contact-us/ContactUs.js';

import ImgOrderBook from './img-order-book.jpg';
import ImgMapStats from './img-map-stats.jpg';
import AnimationStats from './lottie-animation-stats.json';

import './Marketplace.css'; 
import '../home/Home.css'

const SliderSettings = {
    className: "center", 
    centerMode: true, 
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,     
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,     
    touchMove: true, // Enable touch interactions
    touchThreshold: 10, // Threshold for touch swipe (in pixels)
    responsive: [
      {
        breakpoint: 769, // Screen width at which the settings will change (desktop)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Screen width at which the settings will change (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationStats,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }    
};


export default function Marketplace () {

    return (        
        <div>
        <div className='marketplace'>
            <Helmet>
                <title>Markeplace | The Best Real Estate Investment Exchange</title>
            </Helmet>
            <div className='row' style={{marginBottom: "1svh"}}>
                <div id='small-title'>
                    Accretion 
                </div>
            </div>

            <div className='row'> 
                <div className='headline-title'> 
                    <span id='highlight'> Marketplace. </span>  
                    All investment opportunities in real estate brought to ONE place.
                    <br/> 
                    {/* REITs, fractional ownership, and tokenized real estate equity.        */}
                    <TypeAnimation
                    sequence={[
                        'REIT.', // Types 'One'
                        1000, // Waits 1s
                        'Fractional ownership.', // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        'Tokenized real estate equity.', // Types 'Three' without deleting 'Two'
                        1000,                         
                    ]}
                    wrapper="span"
                    deletionSpeed={100}
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block', color: 'purple' }}
                />
                    <br/>
                    Gain full control of your real estate investment.                     
                </div>                                
            </div>            
            
            <div className='row'>    

                <div className='column'>                    
                    <div className="column-right" style={{overflow:"hidden"}} id='animation'>                         
                        <Lottie options={animationOptions}/>                        
                    </div>  
                </div>
                
                <div className='column'>
                    <div id='text'>
                    Your real estate investment presented in clear statistics. 
                    <br/>
                    Gain full knowledge in what you are invested in.
                    </div>
                </div>
                
            </div>            

            <div className='row'>
                
                <div className='column'>
                    <img src={ImgOrderBook} id='img-order-book'/>
                </div>

                <div className='column'>
                    <div id='text'>                                   
                    Get the true market price, through a completely 
                    <span className='highlight-transparent'> TRANSPARENT </span> 
                    bidding process. 
                    <br/>                    
                    Build an order book in the open market. 
                    </div>                    
                </div>

            </div>

            <div className='row'> 
                
                <div id='title'>
                    Join Accretion Marketplace 
                </div>
            </div>
            <div className='row'>
                <div id='text' 
                     style={{textAlign: "left", 
                             margin: "auto", 
                            //  border: "solid black", 
                             maxWidth:"900px", 
                             fontFamily: "monospace"}}
                >
                    Freely Choose Real Estate Investment Instruments on Accretion Marketplace. 
                    <br/>
                    Let Your Best Investment Idea Win. 
                    <br/>
                    Build and Manage Your Own Investment Portfolio on Our Exchange. 
                </div>

            </div>

            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        REIT
                    </div>  
                </div>

                <div className='column' style={{flex: 3}}>
                    <div id='text'>
                    Invest REITs on Accretion Marketplace. 
                    Accretion Marketplace presents detailed information about the locations and ownership structures of each REIT fund, 
                    giving you full knowledge of your investments.
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderREITS />
            </div>

            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        Fractional Real Estate 
                    </div>  
                </div>

                <div className='column' style={{flex: 3}}>
                    <div id='text'>
                        Accretion Marketplace brings fractional home equity investment from fin-tech startups, along side with REITs. 
                        Our platform gives you the full control over your real estate portfolio. 
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderFrac />
            </div>


            <div className='row'>
                
                <div className='column'>
                    <div id='title'>
                        Web3
                    </div>  
                </div>

                <div className='column' style={{flex:3}}>
                    <div id='text'>
                        Accretion Marketplace is introducing Web3 technology from our partners to the mainstream. 
                        On Accretion Marketplace, DeFi competes freely with traditional financial instruments. 
                    </div>
                </div>
                              
            </div>

            <div className='slider'>
                <SliderWeb3 />
            </div>

            <div className='row'>
                <div style={{maxWidth: "900px", 
                         textAlign: "center", 
                         fontSize: "20pt", 
                         fontWeight: "bolder",                         
                }}>
                    Contact Our Support Team, 
                    <br/>
                    Stay Tuned For Accretion Marketplace's Latest Update.  
                </div>
                
            </div>

        </div>
            
            <div className='row'>
                <ContactUs/>
            </div>

        </div>        
    )
};

export { SliderSettings }; 