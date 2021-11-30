import { fadein, fader } from './../route-animation';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterOutlet,Event, NavigationStart, NavigationEnd } from '@angular/router';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { BlogPostCard } from 'src/app/modules/cardList';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
 

})
export class DefaultComponent implements OnInit {
  @ViewChild('sidebar') sidebar: SidebarComponent | undefined;
  showLoadingIndicator = true;
  sideBarOpen=false;
  constructor(private _router:Router) {
     this._router.events.subscribe((routerEvent:Event)=>{
   
       if(routerEvent instanceof NavigationStart){
         this.showLoadingIndicator=true;
       }   
       if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
      }

     })

   }
 
   
  ngOnInit(): void { }
  
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    if(this.sideBarOpen === true){
      
      window.scrollTo(x,x)
    }else{
      window.scrollTo(x, y);
    }
   
   

  }

 
}
