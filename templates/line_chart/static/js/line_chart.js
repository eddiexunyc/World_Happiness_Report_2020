var svgWidth = 1600;
var svgHeight = 900;

// Define the chart's margins as an object
var margin = {
  top: 100,
  right: 100,
  bottom: 100,
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
    //var parseTime = d3.timeParse("%Y");

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

    var xTimeScale = d3.scaleTime()
        .domain(d3.extent(worldData, d => d.year))
        .range([0, chartWidth]);
    
    var yMax = d3.max(worldData, d => d.rank);
    
    var yLinearScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([0, yMax]);


    var bottomAxis = d3.axisBottom(xTimeScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);
    
    chartGroup.append("g").call(leftAxis);

    var line1 = d3.line()
      .x(d => xTimeScale(d.year))
      .y(d => yLinearScale(d.country));
    
    chartGroup
      .attr("d", line1(worldData))
      .classed("line green", true);



}).catch(function(error) {
    console.log(error);
  });
  