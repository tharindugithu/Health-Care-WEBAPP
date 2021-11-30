import { fadein } from './../../layouts/route-animation';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountryReports } from '../CountryReport';
import { CovidupdateserviceService } from '../covidupdateservice.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-covidupdate',
  templateUrl: './covidupdate.component.html',
  styleUrls: ['./covidupdate.component.css'],
  animations:[fadein]
})
export class CovidupdateComponent implements OnInit  {

  loading$ = this.lorder.loading$;
  
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  CountryReports[];
  displayedColumns: string[] = 
  [
    'country',
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'recovered',
    'active',
    'critical',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion'
  ];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service:CovidupdateserviceService,private lorder:LoadingService){}

  public getAllReports(){
    let resp = this.service.covid19Reports();
 
    resp.subscribe(report=>this.dataSource.data=report  as CountryReports[])
    
  }
  ngOnInit(){
    this.getAllReports();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

}
