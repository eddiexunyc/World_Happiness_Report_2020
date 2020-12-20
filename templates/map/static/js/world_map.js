var svg = d3.select("svg");

var projection = d3.geoMercator();
var pathGenerator = d3.geoPath().projection(projection);

var g = svg.append("g");

svg.call(d3.zoom().on("zoom", () => {
    g.attr("transform", d3.event.transform);
}));

d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(data => {
    console.log(data);
    var countries = topojson.feature(data, data.objects.countries);
    console.log(countries);

    g.selectAll("path")
        .data(countries.features)
        .enter().append("path")
            .attr("class", "country")
            .attr("d", d => pathGenerator(d))
        .append("title")
            .text(d => d.properties.name)
});
