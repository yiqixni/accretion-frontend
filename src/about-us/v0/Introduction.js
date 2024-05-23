import './AboutUs.css'; 

import CustodianLogo from './CustodianLogo.jsx';
import BidAskChart from './BidAskChart.jsx';
import Handshake from './Handshake.jsx';


export default function Introduction () {
    return (
        <div>  
            <div className="three-column-container">
                <div className="column">
                    <h2>Who we are</h2>
                </div>
                <div className="column-2">
                    <p>
                    Accretion is a fintech startup inventing a modern real estate exchange. 
                    Our mission is to build an equitable housing market one share at a time. 
                    We aim to create the most affordable place for you to buy and sell real estates.
                    </p>
                </div>
            </div>
            <div>
                <div className="three-column-container">
                    <div className="column">
                        <h2>How it works</h2>
                    </div>
                    <div className="column-2"> </div>
                </div>

                <div className='three-column-container'>
                    <div className='column'>
                        <p>Accretion is the custodian of your property title.</p>
                        < CustodianLogo id="image"/>
                    </div>
                    <div className='column'>
                        <p>Place bids and asks on our exchange.</p>
                        < BidAskChart id="image"/>
                    </div>
                    <div className='column'>
                        <p>
                            Accretion or your designated attorney creates a contract. 
                            The trade is excuted when buyers and sellers sign the contract.
                        </p>
                        < Handshake id="image"/>
                    </div>
                </div>
            </div>

            <div>
                <div className="three-column-container">
                    <div className="column-1">
                        <h2>Why choose us</h2>
                    </div>
                    <div className="column-2"> 
                        <h6> 
                            Investing in the housing market doesn't have to be that hard.
                        </h6>
                </div>
            </div>

            <div className='three-column-container'>
                <div className='column'>
                    <p>Be your own agent and construct a diverse portfolio of real estates anywhere with real time market data.</p>                        
                </div>
                <div className='column'>
                    <p>Minimum cost of selling and buying real estate with less than 0.5% transaction fee.</p>
                    
                </div>
                <div className='column'>
                    <p>
                        Fairness in the housing market comes from market transparency. 
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    )
};