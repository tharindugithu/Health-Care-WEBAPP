import { variable } from '@angular/compiler/src/output/output_ast';
import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[fadein]
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  public errorMessage:string = '';
  public showError: boolean=false;
  loading$ = this.lorder.loading$;
  constructor(private service:AuthService,private router:Router,private lorder:LoadingService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  profileForm2 = new FormGroup({
    Username:new FormControl
    ('',
    [
    Validators.required,
    Validators.maxLength(20)
    ]),
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
      Validators.minLength(4),
      Validators.maxLength(20)
    ]
    ),
    BirthDate:new FormControl('',Validators.required),
    agree:new FormControl('',Validators.required)
  });
  
  [x: string]: any;
 
   

  get Username(){
    return this.profileForm2.get('Username')
  }
  get Email(){
    return this.profileForm2.get('Email')
  }
  get Password(){
    return this.profileForm2.get('Password')
  }
  get BirthDate(){
    return this.profileForm2.get('BirthDate')
  }
  get agree(){
    return this.profileForm2.get('agree')
  }

  submitreg(r:any){
    console.log(r.value);
    this.service.createUser(r.value).subscribe(()=>{
      this.toastr.success('Register Successfully!!');
      this.alert=true;
    },error=>{
      this.errorMessage = error
       if(this.errorMessage === "{'Email': [ErrorDetail(string='patient with this Email already exists.', code='unique')]}'")
      {
           this.errorMessage = "Email is already Exists"
      }else if(this.errorMessage="{'Username': [ErrorDetail(string='Contains some prohibited symbols', code='invalid')], 'Email': [ErrorDetail(string='patient with this Email already exists.', code='unique')]}"){
           this.errorMessage = "Email is already Exists and Username contains some prohibited symbols(</>)"
      }else{
        this.errorMessage="Username contains some prohibited symbols (</>)"
      }
      console.log(error)
      
      this.toastr.warning(this.errorMessage);
      this.showError = true;
      
    }
    
    )
  }
  close(){
    this.router.navigate(['/login'])
  }
  closeWarn(){
    this.showError=false
     if(this.errorMessage === "{'Email': [ErrorDetail(string='patient with this Email already exists.', code='unique')]}'")
    {
      this.Email?.reset();
    }else if(this.errorMessage="{'Username': [ErrorDetail(string='Contains some prohibited symbols', code='invalid')], 'Email': [ErrorDetail(string='patient with this Email already exists.', code='unique')]}"){
      this.Email?.reset();
      this.Username?.reset();

    }else{
      this.Username?.reset();
    }
  }
  
}
