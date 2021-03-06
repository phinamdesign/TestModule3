import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../Model/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  read: boolean;
  employee: Employee = new Employee();
  submitted = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.read = false;
    this.submitted = false;
    this.employee = new Employee();
  }

  show() {
    return this.read = true;
  }
  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
