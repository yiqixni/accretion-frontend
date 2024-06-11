import { Button } from "react-bootstrap";
import "../DatabaseDemo.css"
import { FiPlusCircle } from "react-icons/fi";

export default function Save () {

    return (
        <div className="column" > 
            <Button 
                variant='outline-primary' 
                id='button-share'
                // onClick={saveHandler} 
            >
                <FiPlusCircle /> Save
            </Button> 
        </div>
    )
}