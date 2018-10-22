// from data.js
// this populates the table into the page
var tableData = data;

var tbody=d3.select("#tablerow");

// function for populating the entire table
function tableUFO(){
  tableData.forEach(function(UFOData){
    console.log(UFOData);
    var row = tbody.append("tr");
// takes each entry and finds key and value
    Object.entries(UFOData).forEach(function([key, value]) {
      console.log(key, value);
// appends each value to the table
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
};

// function for the filtered table
  function filterUFO(){
    d3.event.preventDefault();

    var date = d3.select("#datefilter").property("value");
    var filteredData = tableData;

    // loops through each, of the filtered date row equals the date in the input
    // it is added to the new variable
    if(date){
      filteredData = filteredData.filter(row => row.datetime === date);
    };
// clears the table (outside the loop)
    tbody.html("");

    // creates a new list (like the first function) but filtered
    filteredData.forEach(function(UFOData){
      console.log(UFOData);
      var row = tbody.append("tr");
  
      Object.entries(UFOData).forEach(function([key, value]) {
        console.log(key, value);
  
        var cell = tbody.append("td");
        cell.text(value);
      });
  });
};

// when the button is clicked it filters the table using the filterUFO function
d3.selectAll("#clickbutton").on("click",filterUFO);

//runs the tableUFO function
tableUFO();

// create a button to clear the filter

// change the comments section to have a width of 40% of the table