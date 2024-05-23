import ContactUs from '../contact-us/ContactUs.js'; 

import './NotFound.css';

export default function NotFound () {
    return(
        <div>
        <div className='not-found'>
            <div className='container'>
                <div id='title'>
                Page Not Found (: - /)
                </div>            
                <div>
                    But you directly contact us :-)
                </div>
            </div>                                    
        </div>
        <div className='not-found'>
            <div className='container'>
                <ContactUs />
            </div>
            
        </div>
        </div>
    )
}