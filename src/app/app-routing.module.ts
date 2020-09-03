import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VendorComponent } from './vendor/vendor.component';
import { FuleComponent } from './fule/fule.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'vFleet Dashboard' },
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    data: { title: 'Vechicles' },
  },
  {
    path: 'vendor',
    component: VendorComponent,
    data: { title: 'Vendors' },
  },
  {
    path: 'fule',
    component: FuleComponent,
    data: { title: 'Fule' },
  },
  {
    path: 'places',
    component: PlacesComponent,
    data: { title: 'Places' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
