import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../DatabaseDemo.css';

const CreateDeedVisual = () => {
    const data = [
        {
            "owner": "Balmer", 
            "start": "1985",
            "end": "2021", 
            "deed": {
                "date": "1985-10-02T00:00:00",
                "book_page": "16475/327",
            },
            "mortgage": [
                {
                    "date": "1985-10-02T00:00:00",
                    "book_page": "17878/285",
                },
                // Other mortgage objects...
            ],
            "discharge": {
                "date": "2021-11-30T00:00:00",
                "book_page": "79245/123",
            }
        },
        {
            "owner": "Ni",
            "start": "2021",
            "end": "2024", 
            "deed": {
                "date": "2021-12-03T00:00:00",
                "book_page": "79280/456",
            },
            "mortgage": [
                {
                    "date": "2022-03-22T00:00:00",
                    "book_page": "79859/460",
                },
                // Other mortgage objects...
            ],
            "discharge": {
                "date": "2021-12-14T00:00:00",
                "book_page": "79280/454",
            }
        },
    ];

    const svgRef = useRef();
    const height = 300; 
    const width = 600;
    const boxHeight = 50;
    const ownerColor = "lightblue"; 
    const mortgageWidth = 20;
    const mortgageColor = "rgba(198, 45, 205, 0.5)"; 
    const dischargeWidth = 20; 
    const dischargeColor = "lightgreen";
    const yearTotal = data[data.length-1].end - data[0].start; 
    const widthScale = d3.scaleLinear()
                            .domain([0, yearTotal])
                            .range([0, width]) 
    const boxGap = 10; 
    const tooltipRef = useRef(null); // Ref for the tooltip

    useEffect(() => {
        const svg = d3.select(svgRef.current)
                        .attr("height", height) 
                        .attr("width", width);
        
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
                   .text(text);
        };
        
        const hideTooltip = () => {
            tooltip.style('visibility', 'hidden'); // Hide the tooltip
        };

        // Append rectangles for each owner
        data.forEach((d, i) => {
            const boxWidth = widthScale(d.end - d.start) - boxGap;
            const boxX = i === 0 ? 0 : widthScale(data[i - 1].end - data[i - 1].start) + boxGap;
            
            svg.append("rect")
               .attr("x", boxX) 
               .attr("y", 10)
               .attr("width", boxWidth)
               .attr("height", boxHeight)
               .attr("fill", ownerColor) 
               .attr("rx", 10)
               .attr("ry",10)
               .on('mouseover', () => showTooltip(d.owner)) // Show tooltip on mouseover
               .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                   tooltip.style('top', (event.pageY - 10) + 'px')
                          .style('left', (event.pageX + 10) + 'px');
               })
               .on('mouseout', () => hideTooltip()); // Hide tooltip on mouseout
        });
    }, []);

    return (
        <div>
            <svg ref={svgRef} width={width} height={height}></svg>
            <div ref={tooltipRef}></div> {/* Render the tooltip */}
        </div>
    );
};

export default CreateDeedVisual;
