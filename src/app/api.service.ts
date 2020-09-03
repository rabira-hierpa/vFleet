import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpClientModule,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Vehicle } from './models/vehicle';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token cfe5e443fb5bc830f44920ca5b7a8471ef29a9fe',
    'Account-Token': '576b40cfb8',
  }),
};

const apiUrl = 'https://secure.fleetio.com/api/v1/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operations = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(apiUrl + 'vehicles', httpOptions).pipe(
      tap((vehicles) => console.log('Fetched vehicless')),
      catchError(this.handleError('getvehicless', []))
    );
  }
}
