var tableData = data;

var tbody = d3.select("tbody");

data.forEach(function(tableData) {
  console.log(tableData);
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter(entry => entry.datetime === inputValue); 
  console.log(filteredData);  
  
  filteredData.forEach((occurance) => {
    var row = tbody.append("tr");
    Object.entries(occurance).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});


