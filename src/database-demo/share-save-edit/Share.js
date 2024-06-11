import { Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { FiShare } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";

import ImageLoading from "../../helper/ImageLoading";
import "../../overlay/overlay.css"

export default function Share ({shareLink, linkPNG}) {    
    
    const [showOverlay, setShowOverlay] = useState(false);
    const [copied, setCopied] = useState(false);
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

    // Share button handler
    const shareHandler = () => {
        setShowOverlay(true);        
    }        

    // Copy link to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink)
        .then(() => {
            setCopied(true); // Set copied state to true
            setTimeout(() => setCopied(false), 500); // Reset copied state after 3 seconds
            console.log("Link copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy the link: ", err);
        });
    }

    return (
        <div className="column" > 
            <Button 
                variant='outline-primary' 
                id='button-share'
                onClick={shareHandler} 
            >
                <FiShare/> Share
            </Button> 

            {showOverlay && (
                <div className="overlay-share" >
                    <div className="overlay-share-content" ref={overlayRef}>
                        <div className="row">
                            <div className="column" style={{textAlign:"left",margin:"auto", paddingLeft:"5%"}}>
                                Share 
                            </div> 
                            <div className="column" style={{textAlign:"right"}}>
                                <Button                                                                     
                                    variant="outline-primary" 
                                    onClick={closeOverlay}
                                    id="button-close"
                                >
                                    <IoMdCloseCircleOutline style={{minWidth:"100px"}} />
                                </Button>
                            </div> 
                        </div>

                        <div className="row">                             
                            {/* <img src={linkPNG} alt="Data" /> */}
                            <ImageLoading imageUrl={linkPNG} altText={"static deed visual"}/>
                        </div>

                        <div className="row">
                            <div className="column" style={{flex:"6"}}>
                                <input                                     
                                    type="text" 
                                    value={shareLink} 
                                    readOnly 
                                    id="input-share-link"
                                />
                            </div>
                            <div className="column" style={{flex:"1"}}>
                                <Button
                                    onClick={copyToClipboard}
                                    variant="outline-primary"                                     
                                    id="button-copy-link"
                                >
                                    Copy
                                </Button>
                                {copied && ( // Show the alert if copied state is true
                                    <div className="copy-success-message">
                                        Link copied to clipboard!
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>        
    )
}