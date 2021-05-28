import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DSO-final-challenge';
  devices ={}
  measurements = {}
  showDevices = true
  selectedDevice = {}
  startDate = '2000-01-01 00:00:00 '
  endDate = '3000-01-01 00:00:00 '
  

   getDevices(){
    fetch('http://35.242.237.140:5001/dso/devices/')
      .then(response => response.json())
      .then(data => this.devices = data);
  
  }

  getMeasurements(deviceId){
    this.startDate = '2000-01-01 00:00:00 '
    this.endDate = '3000-01-01 00:00:00 '
    fetch('http://35.242.237.140:5001/dso/measurements/')
      .then(response => response.json())
      .then(data => this.measurements = data);
      
    this.selectedDevice = deviceId
    this.showDevices = false
      

  }

  filterMeasurements(){
    
  }

  getBack(){
    this.showDevices = true
  }

}






// var myHeaders = new Headers();
// myHeaders.append('Accept', 'image/jpeg');

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'nocors',
//                cache: 'default' };

// var myRequest = new Request('flowers.jpg', myInit);

// fetch(myRequest)
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });

// const myImage = document.querySelector('img');

// let myRequest = new Request('flowers.jpg');
