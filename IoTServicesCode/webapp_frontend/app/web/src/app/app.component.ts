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
  typeMeasurements = 'both'
  

   getDevices(){
    fetch('http://35.242.237.140:5001/dso/devices/')
      .then(response => response.json())
      .then(data => this.devices = data);
  
  }

  getMeasurements(deviceId){
    this.startDate = '2000-01-01 00:00:00 '
    this.endDate = '3000-01-01 00:00:00 '
    this.selectedDevice = deviceId
    fetch('http://35.242.237.140:5001/dso/devices/query',{
      method:'post',
      body:JSON.stringify({
        "device_id":this.selectedDevice["device_id"],
        "start_date":this.startDate,
        "end_date":this.endDate,
        "type":this.typeMeasurements
    })

    })
      .then(response => response.json())
      .then(data => this.measurements = data);
      
    
    this.showDevices = false
      

  }
  
  


  filterMeasurements(){



    fetch('http://35.242.237.140:5001/dso/devices/query',{
      method:'post',
      body:JSON.stringify({
        "device_id":this.selectedDevice["device_id"],
        "start_date":this.startDate,
        "end_date":this.endDate,
        "type":this.typeMeasurements
    })

    })
      .then(response => response.json())
      .then(data => this.measurements = data);
    
  }

  getBack(){
    this.showDevices = true
  }

}
