import { useEffect } from 'react';
import * as d3 from 'd3';
import ConvertSVG2PNG from './ConvertSVG2PNG';

const CreateDeedVisualPNG = ({dataJson, setDataPNG}) => {           
    
    const dataATTOM = dataJson.property[0].salehistory;    
    const dataAddress = dataJson.property[0].address.oneLine;    
    
    const height = 300; 
    const width = 600; //FIXED WIDTH

    const borderRadiusOff = 10;     

    const heightRect = 50;
    const heightTitle = 10; 
    const marginTopBottom = 10;

    const fillOpacityOff = 0.6;     
    
    const yearEnd = new Date().getFullYear();    
    // define the starting year 
    let yearStart = null;     
    for (let i = dataATTOM.length - 1; i >= 0; i--) {        
        if ("saleTransDate" in dataATTOM[i]) {
            yearStart = new Date(dataATTOM[i].saleTransDate).getFullYear(); 
            break;
        }
    };
    // if yearStart is not define, start use even year space from yearEnd 
    if (!yearStart) {
        console.log("yearStart not defined ", yearStart); 
        yearStart = yearEnd - dataATTOM.length;
    }        
    
    const yearTotal = yearEnd - yearStart;     

    const gapDeed = 10;     
    const yTitleDeed = marginTopBottom + heightTitle; 
    const yDeed = yTitleDeed + marginTopBottom + heightTitle;
    const heightDeed = heightRect; 
    const colorDeed = "lightblue"; 
    
    const yTitleMortgage = yDeed + heightRect + marginTopBottom * 2;
    const yMortgage = yTitleMortgage + marginTopBottom + heightTitle; 
    const widthMortgage = 20;
    const colorMortgage = "rgba(198, 45, 205, 0.5)"; 
    
    const yTitleOthers = yMortgage + heightRect + marginTopBottom * 2; 
    const yOthers = yTitleOthers + marginTopBottom + heightTitle; 
    const widthOthers = 20; 
    const colorOthers = "lightgreen";     

    const widthScale = d3.scaleLinear()
                            .domain([0, yearTotal])
                            .range([0, width-widthMortgage]); 
    

    useEffect(() => {      
         // Create a temporary container
         const tempContainer = document.createElement('div');
         tempContainer.style.position = 'absolute';
         tempContainer.style.top = '-9999px';
         document.body.appendChild(tempContainer);
 
         // Create SVG element within the temporary container
         const svg = d3.select(tempContainer)  
                        .append('svg')
                        .attr('height', height) 
                        .attr('width', width);    
        
        // clear previous svg content
        svg.selectAll("*").remove();
        
        svg.append("rect") // append gray background                        
            .attr("height", height)
            .attr("width", width)
            .attr("fill", "rgba(0, 0, 0, 0.02)")
            .attr("rx", 10)
            .attr("ry", 10)
        
        
        // deed title
        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleDeed) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("deed"); // set the text content 
        // mortgage title
        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleMortgage) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("mortgage"); // set the text content 
        // others title
        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleOthers) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("others"); // set the text content                 
       

        // loop through ATTOM data         
        let lastDeed;
        for (let i=0; i < dataATTOM.length; i++) {
            // mortgage info             
            if (dataATTOM[i].amount.saleTransType == "Stand Alone Finance") {                                                                                                      
                let xMortgage = widthScale(
                    new Date(dataATTOM[i].saleTransDate).getFullYear() - yearStart 
                );                     

                const rectMortgage = svg.append("rect")
                    .attr("class", "link rect-normal")
                    .attr("x", xMortgage) 
                    .attr("y", yMortgage)
                    .attr("width", widthMortgage)
                    .attr("height", heightDeed)
                    .attr("fill", colorMortgage) 
                    .attr("rx", borderRadiusOff)
                    .attr("ry",borderRadiusOff)
                    .attr("fill-opacity", fillOpacityOff)             
                    .on("click", () => { // onClick the button to the link                 
                    })

            }
            // deed resale info
            else if (dataATTOM[i].amount.saleTransType == "Resale") {                                                                              
                
                let trans_date_valid; 
                if ("saleTransDate" in dataATTOM[i]) { 
                    trans_date_valid = true; 
                } else {
                    trans_date_valid = false;
                    dataATTOM[i].saleTransDate = `${yearEnd - i - 1}-01-01`;
                }                

                let deedWidth;                
                if (lastDeed) {
                    deedWidth = widthScale(
                        lastDeed - new Date(dataATTOM[i].saleTransDate).getFullYear() 
                   ); 
                    lastDeed = new Date(dataATTOM[i].saleTransDate).getFullYear();
                } else {
                    deedWidth = widthScale(
                        yearEnd - new Date(dataATTOM[i].saleTransDate).getFullYear() 
                   ); 
                    lastDeed = new Date(dataATTOM[i].saleTransDate).getFullYear(); 
                };             
                deedWidth = deedWidth - width/200; // shrink the width to preserve a gap
                if (!trans_date_valid) {
                    deedWidth = widthMortgage;
                };
                if (deedWidth < 0) {
                    deedWidth = widthMortgage;
                }
                let xDeed;
                xDeed = widthScale(
                    new Date(dataATTOM[i].saleTransDate).getFullYear() - yearStart 
                );                 
                
                const rectDeed = svg
                        .append("rect")                    
                        .attr("class", "link rect-normal")
                        .attr("x", xDeed + width/200)
                        .attr("y", yDeed)                    
                        .attr("height", trans_date_valid ? heightDeed : heightDeed/2)
                        .attr("width", deedWidth) // Transition to the final width
                        .attr("fill", colorDeed)
                        .attr("rx", borderRadiusOff)
                        .attr("ry", borderRadiusOff)                                                    
                        .attr("fill-opacity", fillOpacityOff); // Transition to the final opacity

                                                                     

            }
            // other info 
            else {                
                const xOthers = widthScale(
                    new Date(dataATTOM[i].saleTransDate).getFullYear() - yearStart 
                );                    

                const rectOthers = svg.append("rect")
                    .attr("class", "link rect-normal")
                    .attr("x", xOthers) 
                    .attr("y", yOthers)
                    .attr("width", widthOthers)
                    .attr("height", heightDeed)
                    .attr("fill", colorOthers) 
                    .attr("rx", borderRadiusOff)
                    .attr("ry",borderRadiusOff)
                    .attr("fill-opacity", fillOpacityOff)             
                   
            }
        }
        
        ConvertSVG2PNG(tempContainer.firstChild, setDataPNG, dataAddress);
        
    }, [dataJson]);
    
    return () => {
        document.body.removeChild(tempContainer);
    };
};

export default CreateDeedVisualPNG;