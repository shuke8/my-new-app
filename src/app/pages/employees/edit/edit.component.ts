import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number | any;
  header: string | any;
  employee: Employee |any = {
    id: 0,
    name: '',
    email: '',
    phone: 0
  }


  constructor(private router: Router, private route : ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.header = this.id === 0? "Add employee" : "Edit employee"

    if(this.id != 0){
      this.employee = this.employeeService.onGetEmployees(this.id)
    }
  }
  
      onSubmit(form: NgForm){

        let employee : Employee = {
          id: form.value.id,
          name: form.value.name,
          email : form.value.email,
          phone: form.value.phone
        }

        if(this.id === 0){
          this.employeeService.onAdd(employee)
        }
        else {
          this.employeeService.onUpdate(employee)
        }


        this.router.navigateByUrl('')
        console.log(form.value);
        
  }


  
}
