import { DoctordetailsService } from './../doctordetails.service';
import { fader, fadein } from './../../layouts/route-animation';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Data } from 'src/Data';
import { LoadingService } from '../loading.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations:[fadein]
})
export class TableComponent implements OnInit {
  loading$ = this.lorder.loading$;
  constructor(private service:DoctordetailsService,private lorder:LoadingService){} 
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  Data[];
  displayedColumns: string[] = 
  [
    'doctorname',
   
    'hospitalname',
    'specialization',
    'charge',
    'starttime',
    'endtime',
    'Actions'

  ];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  

  ngOnInit(): void {
    this.getDoctorDetails();
  } 

  public getDoctorDetails(){
    
    let details=this.service.doctorDetails();
    details.subscribe(info=>this.dataSource.data = info as Data[])
    
  }  
   
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

}