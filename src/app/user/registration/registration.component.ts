import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
//import { UserService } from './../../shared/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
 submitReason:boolean=false;
 UserErrorMessage:string="Username and Password is not correct";

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(){
    this.service.formModel.reset();
  }


  onSubmit(){
    this.submitReason=true;
    if (this.service.formModel.invalid) {

      return;

    }


    this.service.register().subscribe(
      (res:any) =>{
        if(res.succeded){
          this.service.formModel.reset();
          this.toastr.success('New User created!','Registration success');
        } else{
           
        }

      },
      err =>{
        console.log(err);
      }

    );
  }

}
