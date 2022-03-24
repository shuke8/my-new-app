import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees : Employee[] = [
  {
    id:1,
    name: "John",
    phone: 111,
    email: 'sdasd@asdasd.com'
  },
  {
    id:2,
    name: "Rick",
    phone: 2222,
    email: 'sdasd@asdasd.com'
  },
  {
    id:3,
    name: "Bob",
    phone: 333,
    email: 'sdasd@asdasd.com'
  }
]
  constructor() { }

  onGet() {
    return this.employees;
  }

  onGetEmployees(id: Number){
    return this.employees.find(x => x.id === id)
  }

  onAdd(employee: Employee) {
    this.employees.push(employee)
  }
  
  onDelete(id: Number) {
    let employee :string | any = this.employees.find(x => x.id === id);
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index,1);
  }

  onUpdate(employee : Employee){
    let oldEmployee = this.employees.find(x => x.id === employee.id);
    oldEmployee!.name = employee.name;
    oldEmployee!.email = employee.email;
    oldEmployee!.phone = employee.phone;
    
  }
}
