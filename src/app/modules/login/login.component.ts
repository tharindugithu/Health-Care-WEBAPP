import { Router } from '@angular/router';
import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../loading.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[fadein]
})
export class LoginComponent  {
  loading$ = this.lorder.loading$;
  alert:boolean=false;
  constructor(private service:AuthService, private toastr:ToastrService,private lorder:LoadingService,private router:Router){}
  profileForm = new FormGroup({
    Email: new FormControl
    ('',
    [
      Validators.required,
      Validators.email
    ]
    ),
    Password:new FormControl
    ('',
    [
      Validators.required,
      Validators.minLength(4)
    ]
    )
  });
 
  
  [x: string]: any;
 
  get Email(){
    return this.profileForm.get('Email')
  }
  get Password(){
    return this.profileForm.get('Password')
  }

  submitlogin(f:any){
    console.log(f.value);
    this.service.loginUser(f.value).subscribe(()=>
    {
      this.alert=true;
      this.toastr.success('Login Successfully!!');
    },error=>{
      this.toastr.warning('Login UnSuccessfull!','Check your username or Password');
      this.profileForm2.reset();
    })

  }
  
  close(){
  
    this.router.navigate(['/home']);
  }
  

}
