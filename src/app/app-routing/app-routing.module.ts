import { HeaderComponent } from './../shared/components/header/header.component';
import { PostsComponent } from './../modules/posts/posts.component';
import { DashbordComponent } from 'src/app/modules/dashbord/dashbord.component';
import { DefaultComponent } from './../layouts/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from '../modules/privacy/privacy.component';
import { TermsComponent } from '../modules/terms/terms.component';
import { TableComponent } from '../modules/table/table.component';
import { ChannelComponent } from '../modules/channel/channel.component';
import { LoginComponent } from '../modules/login/login.component';
import { TipsComponent } from '../modules/tips/tips.component';
import { CovidupdateComponent } from '../modules/covidupdate/covidupdate.component';
import { SupportComponent } from '../modules/support/support.component';
import { FirstComponent } from '../modules/first/first.component';
import { RegisterComponent } from '../modules/register/register.component';


const routes:Routes=[
  {
    path:'',
    component:FirstComponent
  },
  {
      

  path:'',
  component: DefaultComponent,
      children:[{
        path:'home',
        component:DashbordComponent
        }, {
        path:'aboutus',
        component: PostsComponent
        
          }, {
            path:'terms',
            component:  TermsComponent
            
          },  {
            path:'privacy',
            component: PrivacyComponent

          },  {
            path:'table',
            component: TableComponent,

          },{
            path:'channel',
            component:ChannelComponent
          },{
            path:'login',
            component:LoginComponent
          },{
            path:'tips',
            component:TipsComponent
          },{
            path:'covid',
            component:CovidupdateComponent
          },{
            path:'support',
            component:SupportComponent
          }
          ,{
            path:'reg',
            component:RegisterComponent
          }
      
        ] 
        
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
