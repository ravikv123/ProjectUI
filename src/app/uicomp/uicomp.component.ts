import { UpdateServiceService } from './../update-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uicomp',
  templateUrl: './uicomp.component.html',
  styleUrls: ['./uicomp.component.css'],

})
export class UICompComponent implements OnInit {

  updateForm: FormGroup;
  errorMessage:string;

  formConfig: any = [
    {type: 'text', name: 'name', label: 'User Name'},
    {type: 'text', name: 'phone', label: 'Phone Number'}
    ];

 constructor(private router:Router,private service: UpdateServiceService, 
   private builder: FormBuilder, private actRouter :ActivatedRoute) {

  this.updateForm = this.builder.group({});
 }

 ngOnInit() {
     this.actRouter.params.subscribe(param => {
       this.errorMessage=param['msg'];
     });
     this.formConfig.forEach(element => {
         this.updateForm.addControl(element.name, new FormControl('', {}));
     });
 }

 validate() {
   console.log(this.updateForm.value);
   const uname = this.updateForm.controls.name.value;
   const phone = this.updateForm.controls.phone.value;
   if(uname == '')
   {
    this.errorMessage='Name Cannot be empty';     
   }
   else if(phone ==''){
     this.errorMessage='Phone no cant be empty';
   }
   else
   {
      this.service.updateData(this.updateForm.value);
      this.errorMessage="JSON.stringify(this.updateForm)";

   }
 }
}
