import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

export interface vehicleInterface {
  name: string;
  vehicle_status_name: string;
  vehicle_type_name: string;
  fuel_entries_count: number;
  color: string;
  license_plate: string;
  make: string;
  model: string;
}

const ELEMENT_DATA: vehicleInterface[] = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vFleet';
  events: string[] = [];
  opened: boolean;
  vehicles: Object;
  allVehicles: Array<Object>;
  totalVehicles: number;
  totalActive: number;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getVehicles().subscribe((data) => {
      this.allVehicles = data;
      data.map((v, index) => {
        ELEMENT_DATA.push({
          name: v.name,
          vehicle_status_name: v.vehicle_status_name,
          vehicle_type_name: v.vehicle_type_name,
          fuel_entries_count: v.fuel_entries_count,
          color: v.color,
          license_plate: v.license_plate,
          make: v.make,
          model: v.model,
        });
      });
    });
  }
  displayedColumns: string[] = [
    'name',
    'status',
    'type',
    'fule',
    'color',
    'license_plate',
    'make',
    'model',
  ];
  dataSource = ELEMENT_DATA;
}
