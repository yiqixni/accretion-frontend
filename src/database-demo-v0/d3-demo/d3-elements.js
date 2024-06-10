import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; 

const Box = () => {
    const svgRef = useRef(); 

    useEffect( () => {
        const svg = d3.select(svgRef.current); 

        const width = 200; 
        const height = 50; 
        const borderRadius = 10; 
        const margin = {
                        "left": 10,
                        "right": 10, 
                        "top": 10, 
                        "bottom": 10
                        };

        svg.append('rect') 
            .attr('x', margin.left)
            .attr('y', margin.top) 
            .attr('width', width)
            .attr('height', height)
            .attr('rx', borderRadius)
            .attr('ry', borderRadius)
            .attr('fill', 'lightblue')         
    }, [])
    
    return (        
            <svg ref={svgRef} width={210} height={60}></svg>
        
    )
}

export { Box };