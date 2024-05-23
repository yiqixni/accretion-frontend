import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// import dataJson from './json-sample-22-dell.json';
// import dataJson from './json-sample-500-mohawk.json';

import '../DatabaseDemo.css'

const CreateDeedVisualAttomAPI = ({visualWidth, dataJson}) => {                
    const dataATTOM = dataJson.property[0].salehistory;    
    const svgRef = useRef(); // ref for the svg graph 
    const tooltipRef = useRef(null); // Ref for the tooltip
    
    const height = 300; 
    const width = Math.min(window.outerWidth * 0.9, 600);

    const borderRadiusOff = 10;     

    const heightRect = 50;
    const heightTitle = 10; 
    const marginTopBottom = 10;

    const fillOpacityOff = 0.6; 
    const fillOpacityOn = 1;         
    
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

    const gapMortgage = gapDeed; 
    const yTitleMortgage = yDeed + heightRect + marginTopBottom * 2;
    const yMortgage = yTitleMortgage + marginTopBottom + heightTitle; 
    const widthMortgage = 20;
    const colorMortgage = "rgba(198, 45, 205, 0.5)"; 

    const gapOthers = gapDeed;
    const yTitleOthers = yMortgage + heightRect + marginTopBottom * 2; 
    const yOthers = yTitleOthers + marginTopBottom + heightTitle; 
    const widthOthers = 20; 
    const colorOthers = "lightgreen";     

    const widthScale = d3.scaleLinear()
                            .domain([0, yearTotal])
                            .range([0, width-widthMortgage]); 
    

    useEffect(() => {        
        // create svg canvas for the deed record        
        const svg = d3.select(svgRef.current)
                        .attr("height", height) 
                        .attr("width", width) 
        
        // clear previous svg content
        svg.selectAll("*").remove();
        
        svg.append("rect") // append gray background                        
            .attr("height", height)
            .attr("width", width)
            .attr("fill", "rgba(0, 0, 0, 0.02)")
            .attr("rx", 10)
            .attr("ry", 10)
        
        // create document canvas for each record
        const imageOverlay = d3.select('body').append('div')
                                .attr('class', 'deed-overlay')
                                .style('display', 'none');
                                

        // create toolTips              
        const tooltip = d3.select(tooltipRef.current) // Select the tooltip
                            .style('position', 'absolute')
                            .style('background-color', 'white')
                            .style('border', '1px solid black')
                            .style('padding', '5px')
                            .style('border-radius', '5px')
                            .style('visibility', 'hidden') // Initially hide the tooltip
                            .text('');
        
        const showTooltip = (text) => {
            tooltip.style('visibility', 'visible') // Show the tooltip
                    .html(text.replace(/\n/g, '<br/>'))
                    .style("font-family", "monospace")
                    .style("font-size", "12pt")
                    .style("max-width", `${width}px`);
                    
        };
        
        const hideTooltip = () => {
            tooltip.style('visibility', 'hidden'); // Hide the tooltip
        };
        
        const showRectOn = (obj) => {
            obj
                .attr("stroke", "gray")
                .attr("stroke-width", 2)
                .attr("fill-opacity", fillOpacityOn);                
        }

        const showRectOff = (obj) => {
            obj                
                .attr("stroke-width", 0)
                .attr("fill-opacity", fillOpacityOff);                
        }

        // Function to show the image overlay
        const showImageOverlay = (imageUrl) => {
            imageOverlay.style('display', 'block');
            imageOverlay.html(`<img src="${imageUrl}" alt="Image"/>`);
        
            // Add event listener to hide overlay when clicked outside the image
            document.addEventListener('click', function closeOverlay(e) {
                if (imageOverlay.node().contains(e.target)) {                    
                    hideImageOverlay();
                }
                
            });
        };

        // Function to hide the image overlay
        const hideImageOverlay = () => {
            imageOverlay.style('display', 'none');
            document.removeEventListener('click', hideImageOverlay);
        };
        
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
        // console.log("ATTOM json data");                
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
                    .on('mouseover', () => {
                        showRectOn(rectMortgage);
                        showTooltip( // Show deed details on mouseover
                            "date: " + new Date(dataATTOM[i].saleTransDate).toISOString().slice(0, 10) + "\n" +
                            // "amount: $" + dataATTOM[i].mortgage.FirstConcurrent.amount + "\n" + 
                            "amount: " + (dataATTOM[i].mortgage.FirstConcurrent.amount).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0, // Specify minimum digits after decimal point
                              }) + "\n" + 
                            "borrower: " + dataATTOM[i].buyerName + "\n" + 
                            "lender: " + dataATTOM[i].mortgage.FirstConcurrent.lenderLastName
                        )                
                    })
                    .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                        tooltip.style('top', (event.pageY - 10) + 'px')
                            .style('left', (event.pageX + 10) + 'px');
                    })
                    .on('mouseout', () => {// Hide tooltip on mouseout     
                        showRectOff(rectMortgage);
                        hideTooltip(); 
                        d3.select(this)
                            .attr("rx", borderRadiusOff)
                            .attr("ry", borderRadiusOff)
                    });     
            }

            // deed resale info
            else if (dataATTOM[i].amount.saleTransType == "Resale") {                                                                              
                const trans_amount_valid = ("saleAmt" in dataATTOM[i].amount) ? true : false;
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

                rectDeed.on("click", () => { // onClick the button to the link                                     
                        // const imageUrl = `/records-dell/${deedBookPage}.jpg`;                          
                        // showImageOverlay(imageUrl);
                    })
                    .on('mouseover', () => {
                        showRectOn(rectDeed);
                        showTooltip( // Show deed details on mouseover
                            "buyer: " + dataATTOM[i].buyerName + "\n" +
                            "seller: " + dataATTOM[i].sellerName + "\n" + 
                            "transaction date: " + (trans_date_valid ? dataATTOM[i].saleTransDate : "NA") + "\n" +                         
                            "amount: " + (trans_amount_valid ? (dataATTOM[i].amount.saleAmt).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0, // Specify minimum digits after decimal point
                            }) : "NA")                                                     
                            )                
                    })
                    .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                        tooltip.style('top', (event.pageY - 10) + 'px')
                            .style('left', (event.pageX + 10) + 'px');
                    })
                    .on('mouseout', () => {// Hide tooltip on mouseout     
                        showRectOff(rectDeed);
                        hideTooltip();                     
                    });                                                                      

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
                    .on("click", () => { // onClick the button to the link                 
                        // const imageUrl = `/records-dell/${Others.book_page}.jpg`;                          
                        // console.log(imageUrl);
                        // showImageOverlay(imageUrl);
                    })
                    .on('mouseover', () => {
                        showRectOn(rectOthers);
                        showTooltip( // Show deed details on mouseover
                            "transaction type: " + dataATTOM[i].amount.saleTransType + "\n" + 
                            "buyer: " + dataATTOM[i].buyerName + "\n" +
                            "seller: " + dataATTOM[i].sellerName + "\n" + 
                            "transaction date: " + dataATTOM[i].saleTransDate
                        )                
                    })
                    .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                        tooltip.style('top', (event.pageY - 10) + 'px')
                            .style('left', (event.pageX + 10) + 'px');
                    })
                    .on('mouseout', () => {// Hide tooltip on mouseout     
                        showRectOff(rectOthers);
                        hideTooltip();                             
                    });     
            }
        }
                  
    }, [visualWidth, dataJson]);

    return (
        <div style={{margin:"0",padding:"0"}}>            
            <svg ref={svgRef} width={width} height={height} ></svg>            
            <div ref={tooltipRef} style={{textAlign:"left"}}></div> {/* Render the tooltip */}
        </div>
    );
};

export default CreateDeedVisualAttomAPI;

