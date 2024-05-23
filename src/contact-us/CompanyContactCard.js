import '../about-us/AboutUs.css';

const emailAddress = "support@accretion.life";
const subject = "Message to Accretion";
const body = "";
const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const phoneNumber = "720-225-7668";
const telUrl = `tel:${phoneNumber}`;


export default function CompanyContactCard() {
    return (
        <div className='column'>
            <div className='line-item'> 
                <a href={mailtoUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                    {`email us: ${emailAddress}`} 
                </a>
            </div>
            <div className='line-item'>
                <a href={telUrl} style={{ textDecoration:'none', color: 'inherit'}}>
                    {`call or text us: ${phoneNumber}`}
                </a>
            </div>
        </div>
    )
}