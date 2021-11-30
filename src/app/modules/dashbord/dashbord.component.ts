import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  animations:[fadein]

})
export class DashbordComponent implements OnInit {
 longText="fdfdfdf";
  constructor() { }

  ngOnInit(): void {
  }

}
