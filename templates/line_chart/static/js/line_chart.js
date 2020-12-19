var svgWidth = 950;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 10,
  right: 10,
  bottom: 50,
  left: 100
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("#myChart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


d3.json("../../project_1").then(function(worldData){
    console.log(worldData)

    worldData.forEach(function(data){
        data.rank = +data.rank;
        data.country = data.country;
        data.score = +data.score;
        data.gdp = +data.gdp;
        data.social_support = +data.social_support;
        data.life_expectancy = +data.life_expectancy;
        data.freedom = +data.freedom;
        data.generosity = +data.generosity;
        data.corruption = +data.corruption;
        data.year = data.year;
    })
    var xLinearScale = d3.scaleTime()
      .domain(d3.extent(worldData, d => d.year))
      .range([0, chartWidth]);
    
    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.extent(worldData, d => d.gdp)])
      .range([chartHeight, 0]);
    
    var bottomAxis = d3.axisBottom(xLinearScale).tickFormat(d3.format("d"));
    var leftAxis = d3.axisLeft(yLinearScale);

    var line = d3.line()
      .x(d => xLinearScale(d.country))
      .y(d => yLinearScale(d.gdp));
    
    chartGroup.append("path")
      .attr("d", line(worldData))
      .classed("line", true);
    
    chartGroup.append("g")
      .classed("axis", true)
      .call(leftAxis);
    
    chartGroup.append("g")
      .classed("axis", true)
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(bottomAxis);

}).catch(function(error) {
    console.log(error);
});





  