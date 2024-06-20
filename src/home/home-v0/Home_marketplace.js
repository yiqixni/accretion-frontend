import { Helmet } from 'react-helmet';

import './Home.css'

export default function Home () {
    return (
        <div className='home'>
            <Helmet>
                <title>Home | Accretion</title>
            </Helmet>
            <div className="search-bar"> {/* Insert the home image */}
                {/* <h4>Search Bar</h4> */}
            </div>
            <div className='three-column-container'>
                <div className='column'>
                    <h5>Buy</h5>
                </div>
                <div className='column'>
                    <h5>Sell</h5>
                </div>
                <div className='column'>
                    <h5>About Us</h5>
                </div>
            </div>
            
        </div>
    )
}