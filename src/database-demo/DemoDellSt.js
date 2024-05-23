import CreateDeedVisual from "./d3-demo/CreateDeedVisual";

export default function DemoDellSt () {
    return (
        <div className="demo-dell"> 
            <div className="text">
                Deed Recrod Visualization 
                <br/>
                22 Dell St. Somerville MA. 
            </div>
            <div className="deed-records">                
                <CreateDeedVisual/>
            </div>
            
        </div>
    )
};