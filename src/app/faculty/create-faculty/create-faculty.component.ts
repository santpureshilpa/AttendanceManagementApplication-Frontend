import { Faculty } from './../faculty';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {



  addFacultyForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('',Validators.required),
      userName: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]([.-](?![.-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      emailId: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      gender: new FormControl('',[Validators.required, Validators.pattern('^(?:m|M|male|Male|f|F|female|Female)$')]),
      dateOfBirth: new FormControl('',Validators.required),
      mobileNo: new FormControl('',[Validators.required, Validators.pattern('(^[6-9][0-9]{9}$)')]),
    }
  )

  faculty: Faculty = new Faculty(0, '', '', '', '' , '', new Date, '',0)
  

  constructor(private facultyService: FacultyService, private router: Router) {   
  }

  ngOnInit(): void {
  }
  saveFaculty(){
    this.facultyService.createFaculty(this.faculty).subscribe(data =>{
      alert("faculty added")
      console.log(data);
      this.goToFacultyList();
    },
    error => console.log(error));
  }
  goToFacultyList(){
    this.router.navigate(['/faculties']);
  }

  goToLoginPage(){
    this.router.navigate(['login']);
  }

  goToAdminHomePage(){
    this.router.navigate(['adminhome'])
  }

  onSubmit(){
    this.saveFaculty();
    // this.addFacultyForm.reset();
  }

  get firstName(){return this.addFacultyForm.get('firstName')}
  get lastName(){return this.addFacultyForm.get('lastName')}
  get userName(){return this.addFacultyForm.get('userName')}
  get password(){return this.addFacultyForm.get('password')}
  get emailId(){return this.addFacultyForm.get('emailId')}
  get gender(){return this.addFacultyForm.get('gender')}
  get dateOfBirth(){return this.addFacultyForm.get('dateOfBirth')}
  get mobileNo(){return this.addFacultyForm.get('mobileNo')}
  
}
