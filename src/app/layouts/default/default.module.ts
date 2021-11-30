import { NetworkInterceptor } from './../../network.interceptor';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashbordComponent } from 'src/app/modules/dashbord/dashbord.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PrivacyComponent } from 'src/app/modules/privacy/privacy.component';
import { TermsComponent } from 'src/app/modules/terms/terms.component';
import { TableComponent } from 'src/app/modules/table/table.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChannelComponent } from 'src/app/modules/channel/channel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule,HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TipsComponent } from 'src/app/modules/tips/tips.component';
import { TipserviceService } from 'src/app/modules/tipservice.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import {MatListModule} from '@angular/material/list';
import { CovidupdateComponent } from 'src/app/modules/covidupdate/covidupdate.component';
import { CovidupdateserviceService } from 'src/app/modules/covidupdateservice.service';
import { SupportComponent } from 'src/app/modules/support/support.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { FirstComponent } from 'src/app/modules/first/first.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { AuthService } from 'src/app/modules/auth.service';
import { ErrorHandlerService } from 'src/app/modules/error-handler.service';
import { ToastrModule  } from 'ngx-toastr' 
import { DoctordetailsService } from 'src/app/modules/doctordetails.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    PostsComponent,
    PrivacyComponent,
    TermsComponent,
    TableComponent,
    ChannelComponent,
    TipsComponent,
    LoginComponent,
    CovidupdateComponent,
    SupportComponent,
    HomeComponent,
    FirstComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatListModule,
    FlexLayoutModule,
    MatSliderModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        progressBar:true
      }
    )
 
   
  ],
  providers:[
    TipserviceService,
    CovidupdateserviceService,
    {provide:HTTP_INTERCEPTORS,
     useClass:NetworkInterceptor,
     multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    AuthService,
    DoctordetailsService 
  ]

})
export class DefaultModule {
 }
