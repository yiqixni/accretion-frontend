import * as d3 from 'd3'

export default function CreateTooltip(text, x, y) {
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .text(text);
  
    return function () {
      tooltip.style("visibility", "visible")
        .style("left", (d3.event.pageX + x) + "px")
        .style("top", (d3.event.pageY + y) + "px");
    };
}