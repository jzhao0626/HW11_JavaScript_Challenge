// from data.js
var sightings = data;
var table = d3.select("#ufo-table")
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form1 = d3.select("#dateForm");

// Create event handlers 
button.on("click", runDate);
form1.on("submit", runDate);



// YOUR CODE HERE!
sightings.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


function runDate() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var date = inputDate.property("value");

    console.log(date);

    var test = sightings.map(([key, value]) => (key));
    console.log(test);

    var filteredSightings = sightings.filter(sighting => sighting.datetime == date);

    tbody.html("");

    filteredSightings.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });

    console.log(filteredSightings);

}
