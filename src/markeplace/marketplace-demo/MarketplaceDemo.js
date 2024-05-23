import './MarketplaceDemo.css';

import InfoGraph from './InfoGraph.js';

export default function MarketplaceDemo () {
    
    return (
        <div className="marketplace-demo">
            
            <div className='demo-app'>
                <div className='row'>
                    Search bar
                </div>
                <div className='row'>
                    <div className='column' id='demo-graph'>
                        <InfoGraph style={{border: "solid white"}}/>
                    </div>

                    <div className='column' id='demo-menu'>
                        <div className='row'>
                            Price
                        </div>
                        <div className='row'>
                            Order Book
                        </div>
                        <div className='row'>
                            Volume
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        Buy
                    </div>

                    <div className='column'>
                        Sell
                    </div>
                </div>
            </div>

        </div>
    )
};