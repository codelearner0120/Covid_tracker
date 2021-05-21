import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  district!:String;
  districtData:any;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe((params:any)=>{
      if(params.data){
        this.districtData=JSON.parse(params.data);
        this.district=params.name;
        // console.log(this.districtData)
      }
    })
  }

  ngOnInit(): void {
  }

}
