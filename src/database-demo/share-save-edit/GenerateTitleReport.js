// GENERATE TITLE REPORT BUTTON 
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { Button } from "react-bootstrap";
import "../DatabaseDemo.css"

export default function GenerateTitleReport () {    

    return (
        <div className="column" > 
            <Link to={"/title-report"}>
            <Button                
                variant='outline-primary' 
                id='button-share'
            >
                <MdEditDocument /> 
                Generate AI Title Report
            </Button>
            </Link>
        </div>
    )
}