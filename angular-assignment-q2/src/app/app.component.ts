import { Component} from '@angular/core';
import { Employee,Address} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent  {

  employeeModel=new Employee('',new Address('','',undefined),undefined,undefined,'')
  submitted = false;
  today = new Date();
  minAge = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());

  constructor() {}

  onSubmit() {
  //onSubmit(employeeForm:any) {

     console.log("Employee Details\nName:",this.employeeModel.name,"\nAddress: Street - ",this.employeeModel.address.street,
     "; City - ",this.employeeModel.address.city, "; Pincode - ",this.employeeModel.address.pincode,"\nPhone Number: ",this.employeeModel.phone,
     "\nDOB: ",this.employeeModel.dob,"\nEmail: ",this.employeeModel.email)
     //console.log(employeeForm.value)

     this.submitted=true

     setTimeout(() => {
        this.employeeModel.setValue()
        this.submitted = false;
      });
  }

}
