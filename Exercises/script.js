var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matriz = "";
var slope = 1.2;
var intercept = 7;
var xValues = [];
var yValues = [];
let myPlotter = new XYPlotter("myCanvas"); // Create a Plotter

for (var y = 0; y < array.length; y++) {

  for (var x = 0; x < array[y].length; x++) {

    if (x == (array[y].length - 1)) {
      matriz += " | " + array[y][x] + " |<br>";
    } else {
      matriz += " | " + array[y][x];
    }
  }
}

document.getElementsByClassName("algebra")[0].innerHTML = matriz;

myPlotter.transformXY();

// Create random XY Points
numPoints = 500;

const xPoints = Array(numPoints).fill(0).map(function() {
  return Math.random() * myPlotter.xMax;
});

const yPoints = Array(numPoints).fill(0).map(function() {
  return Math.random() * myPlotter.yMax;
});

myPlotter.plotPoints(numPoints, xPoints, yPoints, "rgb(0, 0, 255)"); // Plot the Points

myPlotter.plotLine(0, 0, myPlotter.xMax, myPlotter.yMax, "rgb(255, 0, 0)"); // Plot a Line

// Generate values
for (var x = 0; x <= 10; x += 1) {
  xValues.push(x);
  yValues.push(x * slope + intercept);
}

// Define Data
var data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}];

var layout = { title: "Slope=" + slope + " Intercept=" + intercept }; // Define Layout

Plotly.newPlot("myPlot", data, layout); // Display using Plotly