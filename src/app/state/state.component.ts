import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateData:any=[]
  state!:String;
  districts:any=[];
  constructor(private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe((param: any) => {
      if (param.name){
          this.stateData=JSON.parse(param.name);
          this.districts=this.stateData.districtData;
          // console.log(this.stateData.districtData);
          this.state=param.state;
          // console.log(this.stateData,this.state);
      }
    });
  }

  ngOnInit(): void {
  }
  districtPage(district:any){
    this.router.navigate(['state/district/',district],{
      queryParams:{
        data:JSON.stringify(this.districts[district]),
        name:district
      }
    }
    );
    // console.log(this.districts[district]);
  }
}
