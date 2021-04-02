// from data.js
var sightings = data;
var table = d3.select("#ufo-table")
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#dateForm");


// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

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


function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var date = inputDate.property("value");
    var city = inputCity.property("value");
    var state = inputState.property("value");
    var country = inputCountry.property("value");
    var shape = inputShape.property("value");

    console.log(date);

    var inputArray = [date, city, state, country, shape]
    var filterArray = ["datetime", "city", "state", "country", "shape"]

    for (var i=0; i<5; i++) {

      console.log(inputArray[i])
      
      if (i == 0) {
        if (!(inputArray[i].length == 0)) {
          console.log("${filterArray[i]} is Not Empty")
          var filteredSightings = sightings.filter(sighting => sighting[filterArray[i]] == inputArray[i]);
        }
        else {
          console.log("${filterArray[i]} is Not Empty")
          var filteredSightings = sightings;
        }
        console.log(filteredSightings)
      }
      
      else {
        if (!(inputArray[i].length == 0)) {
          console.log("${filterArray[i]} is Not Empty")
          var filteredSightings = filteredSightings.filter(sighting => sighting[filterArray[i]] == inputArray[i]);
        }
        else {
          console.log("${filterArray[i]} is Empty")
          var filteredSightings = filteredSightings;
        }
        console.log(filteredSightings)
      }
    } 

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