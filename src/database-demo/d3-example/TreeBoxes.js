import * as d3 from 'd3'; 
import treeBoxes from './tree-boxes.js';

export default TreeBoxes () {
    return (
        <div class="container">
            {
                d3.json("data-example.json", function(error, json) {
                    treeBoxes('', json.tree);
                });
            }
        </div>
    )
};