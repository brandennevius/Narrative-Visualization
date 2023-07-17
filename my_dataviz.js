// Set the dimensions and margins of the graph
var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Append SVG and group element
var svg = d3.select("#my_dataviz")
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("data.csv", function(data) {
  // (to do) process data, define x and y scales, line generator etc. 

  // Add your annotations
  var annotations = [
    {
      note: {
        label: "Here is the annotation label",
        title: "Annotation Title"
      },
      x: 100, y: 100, // Position of your note, adjust according to your scale and data
      dx: 100, dy: 100  // If you want your note to be offset a certain distance
    }
  ]

  // Add annotation to the chart
  var makeAnnotations = d3.annotation()
    .annotations(annotations)
  svg.call(makeAnnotations)
});