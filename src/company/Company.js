import { Helmet } from 'react-helmet';

import AboutUs from '../about-us/AboutUs.js'; 
import ContactUs from '../contact-us/ContactUs.js';
import Leadership from './Leadership.js';
import Career from './Career.js';

import './Company.css'; 

export default function Company () {
    return (
        <div>
            <Helmet>
                <title>Company | Accretion</title>
            </Helmet>
                        
            <AboutUs />
            <ContactUs />
            <Leadership />
            <Career />
            
        </div>
    )
}