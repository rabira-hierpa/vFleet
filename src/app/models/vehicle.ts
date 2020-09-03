export class Vehicle {
  id: string;
  name: string;
  vehicle_status_name: string;
  vehicle_status_id: string;
  vehicle_status_color: string;
  vehicle_type_name: string;
  fuel_entries_count: number;
  service_entries_count: number;
  service_reminders_count: number;
  in_service_date: Date;
  created_at: Date;
  updated_at: Date;
  color: string;
  license_plate: string;
  make: string;
  model: string;
  year: Date;
  driver: Object;
  specs: Object;
}

['name', 'status', 'type', 'fule', 'color', 'license_plate', 'make', 'model'];
