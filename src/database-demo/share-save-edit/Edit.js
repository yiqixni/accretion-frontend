import { GrEdit } from "react-icons/gr";
import ContactUsOverlay from "../../contact-us/ContactUsOverlay";
import "../DatabaseDemo.css"

export default function Edit () {
    const message = "Contact us to join the fasted growing database for real estate professionals. Accretion support team will get back you in the same business day.";

    return (
        <div className="column" > 
            <ContactUsOverlay 
                buttonText={<><GrEdit /> Edit</>} 
                message={message}
                id="button-share"
            />                
        </div>
    )
}