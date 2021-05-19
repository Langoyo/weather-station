/*
Javascript file to impelement client side usability for
Operating Systems Designs exercises.
 */

var  server_address = "http://34.78.26.39:5001/"
var get_data = function(){
    $.getJSON(server_address+"dso/measurements/", function( data ){
        //var data = JSON.parse(data);
        $('#table_measurements').empty();
        $('#table_measurements').html('<tr>\n' +
            '                               <th>Temperature (ºC)</th>\n' +
            '                               <th>Humidity (%)</th>\n' +
            '                               <th>Devices</th>\n' +
            '                           </tr>');
        for (var i = 0; i < data.length; i++) {
            //$(".measurements").html("Temperature: " + data["temperature"] + " C | Humidity " + data["humidity"] + " %");
            $('#table_measurements').append('<tr>' + '<td>' +  data[i]["temperature"].toString() + '</td><td>' + data[i]["humidity"].toString() + '</td><td>' + data[i]["device"].toString() + '</td>' + '</tr>');
        }

    });
}
var get_devices = function(){
    //var data = JSON.parse(data);

    $.getJSON(server_address+"dso/devices/", function( data ){
        $('#table_devices').empty();
        $('#table_devices').html('<tr>\n' +
        '                           <th>Device name</th>\n' +
        '                       </tr>\n');
        //$(".devices").html("Device: " + data["device_id"]);
        for (var i = 0; i < data.length; i++) {
            $('#table_devices').append('<tr>' + '<td>' +  data[i]["device_id"][0] + '</td>'  + '</td>');
        }
    });
}


function filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_measurements");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

setInterval(get_data,2000)
setInterval(get_devices,2000)