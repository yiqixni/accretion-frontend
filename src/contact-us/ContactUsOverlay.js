import { Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ContactUs from './ContactUs';
import "../overlay/overlay.css"


export default function ContactUsOverlay({ buttonText, message }) {
    if (!buttonText) { 
        buttonText = "Contact Us";
    };

    const [showOverlay, setShowOverlay] = useState(false);
    const overlayRef = useRef(null);

    // Overlay
    const closeOverlay = () => {
        setShowOverlay(false);
    };

    // Close overlay by clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                closeOverlay();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Show overlay handler
    const showOverlayHandler = () => {
        setShowOverlay(true);
    };

    return (
        <div>
            <Button 
                variant="outline-primary" 
                onClick={showOverlayHandler}
                id="button-share"
            >
                {buttonText}
            </Button>

            {showOverlay && (
                <div className="overlay-contact-us">
                    <div className="overlay-contact-us-content" ref={overlayRef}>
                        <div className="row">
                            <div className="column" style={{ textAlign: "left", margin: "auto", paddingLeft: "5%" }}>
                                Contact Us
                            </div>
                            <div className="column" style={{ textAlign: "right" }}>
                                <Button
                                    variant="outline-primary"
                                    onClick={closeOverlay}
                                    id="button-close"
                                >
                                    <IoMdCloseCircleOutline style={{ minWidth: "100px" }} />
                                </Button>
                            </div>
                        </div>

                        <div className="row">
                            <ContactUs message={message} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
