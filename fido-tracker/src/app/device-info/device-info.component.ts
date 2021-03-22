import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  petName = "Dexter";
  batteryLevel = 100;
  batteryIcon = "battery_full";
}
