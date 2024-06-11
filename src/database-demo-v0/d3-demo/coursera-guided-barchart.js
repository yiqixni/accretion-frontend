async function barChart () {
    const dataset = await d3.csv("bodypart-injury-clean.csv")
    console.log(dataset)

    const width = 600 
    const height = 600 

    const margin = {top:20, right: 30, bottom: 30, left: 40}

    const canvas = d3.select("#viz")
                     .append("svg")
                     .attr("width", width) 
                     .attr("height", height)

    const wrapper = canvas.append("g")
                        .style("transform", `translate(${margin.left}px,${margin.top}px)`)
    // rect width height x and y 
    const xScale = d3.scaleBand() // scaleBand takes domain and range to scale the data
                        .domain(["Arm","Eye","Head","Hand","Leg","Other"])
                        .range([0, width-margin.left])
                        .padding(0.2)
    
    const yScale = d3.scaleLinear()
                        .domain(d3.extent(dataset, d => +d.Total))
                        .range([height, 0]) // range is inverted due to the SVG cordinate

    const barRect = wrapper.append("g") //g element holds all elements together
                        .selectAll("rect")
                        .data(dataset)
                        .join('rect')
                        .attr("x", d => xScale(d.BodyRegion))
                        .attr("y", d => yScale(+d.Total))
                        .attr("width", xScale.bandwidth())
                        .attr("height", d => height - yScale(+d.Total))
                        .attr("fill", "teal")
    const yAxis = d3.axisLeft().scale(yScale)

    wrapper.append("g").call(yAxis) //use call function to invoke the y axis
    
    const xAxis = d3.axisBottom().scale(xScale) 
    wrapper.append("g").call(xAxis)
                .attr("transform",`translate(0,${height-margin.bottom})`) 

    
} 

barChart()