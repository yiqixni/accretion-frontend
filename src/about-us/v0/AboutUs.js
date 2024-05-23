import { Helmet } from 'react-helmet';

import './AboutUs.css'; 
// import Introduction from './Introduction.js';
import ContactUs from '../contact-us/ContactUs.js';
import Leadership from './Leadership.js';
import Career from './Career.js';

export default function AboutUs () {
    return (
        <div className='about-us'>
            <Helmet>
                <title>About Us | Accretion</title>
            </Helmet>

            {/* the first version of introduction is removed */}
            {/* <Introduction /> */}
            
            <ContactUs />
            <Leadership />
            <Career />
        </div>
    )
}