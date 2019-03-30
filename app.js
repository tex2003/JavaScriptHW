// from data.js
var tableData = data;

var tbody = d3.select("tbody");


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


function buildTable(ufodata){
  //Clear out existing data
  tbody.html("")
  // for each row in the obeject tableData append a table row(tr) within the html tbody
  ufodata.forEach(x=> {
      var row = tbody.append("tr");
      // append the value of each object to a table data(td) row
      Object.values(x).forEach((value)=>{
          var cell = row.append('td').text(value);
      })
  });

}
//initialize table
buildTable(tableData);

});



