import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) {
  }
  covidData(){
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }
}
