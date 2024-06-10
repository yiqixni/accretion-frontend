import { Button } from "react-bootstrap";
import "../DatabaseDemo.css"
import { GrEdit } from "react-icons/gr";

export default function Edit () {

    return (
        <div className="column" > 
            <Button 
                variant='outline-primary' 
                id='button-share'
                // onClick={editHandler} 
            >
                <GrEdit /> Edit
            </Button> 
        </div>
    )
}