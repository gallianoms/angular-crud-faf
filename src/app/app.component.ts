import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Angular-CRUD';
  msg:string = '';

  employees = [
    {name: 'Salvador', position: 'Bussinessman', email: 'salvador@gmail.com'},
    {name: 'Salvador2', position: 'Bussinessman2', email: 'salvador@gmail.com'},
    {name: 'Salvador3', position: 'Bussinessman3', email: 'salvador@gmail.com'}
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmployee():void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Employee Added Successfully';
    
  }

  deleteEmployee(i):void {
    if(confirm('Are you sure delete?') == true) {
      this.employees.splice(i, 1);
      this.msg = 'Employee Deleted Successfully';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++) {
      if(i == j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Employee Updated Successfully';
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
