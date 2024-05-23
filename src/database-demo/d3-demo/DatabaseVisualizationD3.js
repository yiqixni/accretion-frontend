import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function DatabaseVisualizationD3() {
  const svgRef = useRef();

  useEffect(() => {
    // Code to create the visualization using D3
    const svg = d3.select(svgRef.current);

    // Define your data structure (replace with your actual family tree data)
    const data = [
      { name: "Owner1", parents: [] },
      { name: "Owner 2", parents: ["Parent"] },
      { name: "Owner 3", parents: ["Parent"] },
      // ... more family members
    ];

    // Create an object representing the root node of the hierarchy
    const rootNode = { name: "Root", children: data };

    // Define margins for the SVG element
    const margin = { top: 20, right: 20, bottom: 30, left: 20 };
    const width = svg.attr("width") - margin.left - margin.right;
    const height = svg.attr("height") - margin.top - margin.bottom;

    // Create a hierarchical layout (e.g., d3.tree) based on your data structure
    const hierarchy = d3.tree().size([height, width]);

    // Create a root node from your data
    const root = d3.hierarchy(rootNode);

    // Pass the root node to the hierarchy layout to generate node positions
    const nodeHierarchy = hierarchy(root);

    // Define scales for x and y positions based on the layout
    const xScale = d3.scaleLinear().domain([
      d3.min(nodeHierarchy.descendants(), d => d.x),
      d3.max(nodeHierarchy.descendants(), d => d.x)
    ]).range([0, width]);

    const yScale = d3.scaleLinear().domain([
      d3.min(nodeHierarchy.descendants(), d => d.y),
      d3.max(nodeHierarchy.descendants(), d => d.y)
    ]).range([height, 0]);

    // Create a group element for each node in the hierarchy
    const nodeGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

      nodeGroup
        .selectAll("rect")
        .data(nodeHierarchy.descendants()) // Select all nodes (including descendants)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.x) - 25) // Adjust x position to center box
        .attr("y", (d) => yScale(d.y) - 10) // Adjust y position to center box
        .attr("width", 100) // Set width of the box
        .attr("height", 80) // Set height of the box
        .attr("fill", "lightblue"); // Set fill color
        
        // Add text labels for nodes
        nodeGroup
        .selectAll("text")
        .data(nodeHierarchy.descendants())
        .enter()
        .append("text")
        .attr("text-anchor", "middle") // Center the text
        .attr("dy", "0.35em") // Offset the text vertically to center it relative to the box
        .attr("fill", "black") // Set text color
        .attr("font-size", "12px") // Set font size
        .attr("x", (d) => xScale(d.x)) // Position text horizontally aligned with the center of the box
        .attr("y", (d) => yScale(d.y)) // Position text vertically aligned with the center of the box
        .text((d) => d.data.name); // Display the name of each node
    


  }, []); // Empty dependency array to run only once after mount

  return (
    <div>
      <div className="title">D3 Visualization</div>
      <svg ref={svgRef} width={800} height={600}></svg>
    </div>
  );
}