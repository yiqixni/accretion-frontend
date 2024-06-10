import { Button } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";
import ContactUsOverlay from "../../contact-us/ContactUsOverlay";
import "../DatabaseDemo.css"

export default function Save () {
    const message = "Contact us to create an Accretion Database account. Accretion support team will get back to you on the same day.";

    return (
        <div className="column" > 
            <ContactUsOverlay
                message={message}
                buttonText={<><FiPlusCircle /> Save </>}
            />
        </div>
    )
}