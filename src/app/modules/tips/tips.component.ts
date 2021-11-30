import { LoadingService } from './../loading.service';
import { fadein } from './../../layouts/route-animation';
import { MatTableDataSource } from '@angular/material/table';
import { Healthtips } from './Healthtips';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { TipserviceService } from '../tipservice.service';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  animations: [
    fadein,
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TipsComponent implements OnInit
{
  loading$ = this.lorder.loading$;
  errorM:any
  gridColumns=3;
  posts:any=[];
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  Healthtips[];
  columnsToDisplay = ['title','source'];
  expandedElement: Healthtips | null | undefined;
  dataSource = new MatTableDataSource<Healthtips>(this.ELEMENT_DATA)
  constructor(private service:TipserviceService,private lorder:LoadingService){}
 ngOnInit(){
   this.getdata();
 }

 getdata(){
   let resp = this.service.apiCall();
   resp.subscribe(tips=>{
     this.posts=tips 
   
  });
 }

}  



