import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  
})
export class EmployeesComponent implements OnInit {

  list: Employee[];
  
  constructor(private employeeService: EmployeeService) { 
    this.list = employeeService.employees;
  }

  ngOnInit():void {
  }

  onDelete(id : Number) {

    this.employeeService.onDelete(id)
  }
}
