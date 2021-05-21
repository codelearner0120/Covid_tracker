import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  covidData:any;
  stateData:any=[];
  state:any=[];
  union:any=[];
  constructor(private covidService:CovidService, public router:Router) { }

  ngOnInit(): void {
    this.getCovidData();
  }
  getCovidData(){
    this.covidService.covidData().subscribe((res)=>{
      this.covidData=res;
      // console.log(this.covidData);
      for (const key in this.covidData) {
        if(key=="State Unassigned"){
          continue;
        }
        if(key=="Andaman and Nicobar Islands" || key=="Dadra and Nagar Haveli and Daman and Diu" || key=="Lakshadweep" || key=="Ladakh" || key=="Puducherry" || key=="Jammu and Kashmir"){
          this.union.push(key);
        }
        else{
          this.stateData.push(this.covidData[key]);
          // console.log(this.covidData[key]);
          this.state.push(key);
        }
      }
      // console.log(this.stateData);
    })
  }
  sendData(name:any,i:any){
    this.router.navigate(['/state',this.stateData[i].statecode],{
      queryParams:{
        name: JSON.stringify(this.stateData[i]),
        state:name
        }
      });
  }
}
