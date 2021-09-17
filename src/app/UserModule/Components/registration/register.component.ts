import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { SkyWaitService } from '@skyux/indicators';

import { SkyToastService, SkyToastType } from '@skyux/toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm:FormGroup;
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private toast:SkyToastService,private loader:SkyWaitService,private elRef:ElementRef){}

    ngOnInit(){
      this.registerForm=this.formBuilder.group({
       firstName:['',Validators.required],
       lastName:['',Validators.required],
       email:['',Validators.email],
       age:['',Validators.required],
       companyId:['',Validators.required],
       doj:['',Validators.required],
       salary:['',Validators.required]
      })
    }
    registerUser(){
    this.registerForm.markAllAsTouched();
    for (const key of Object.keys(this.registerForm.controls)) {
      if (this.registerForm.controls[key].invalid) {
        const invalidControl = this.elRef.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
     }
    }
     if(this.registerForm.valid){
     this.http.post("http://localhost:3000/users", this.registerForm.value).subscribe((res)=>{
       console.log(res);
     });
     this.loader.beginBlockingPageWait();
     setTimeout(() => {
       this.loader.endBlockingPageWait();
       this.registerForm.reset();
       this.toast.openMessage('User Registered Successfully', {
       type: SkyToastType.Success,
       autoClose:true
    });
     }, 2000);
     
  }
    }
}
