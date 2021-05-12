import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-update-by-id',
  templateUrl: './update-by-id.component.html',
  styleUrls: ['./update-by-id.component.css']
})
export class UpdateByIdComponent implements OnInit {

  isDisabled = true;

  addFacultyForm = new FormGroup(
    {
      facultyId: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]([.-](?![.-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      gender: new FormControl('', [Validators.required, Validators.pattern('^(?:m|M|male|Male|f|F|female|Female)$')]),
      dateOfBirth: new FormControl('', Validators.required),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern('(^[6-9][0-9]{9}$)')]),
    }
  );

  facultyId = 0;

  faculty: Faculty = new Faculty(0, '', '', '', '', '', new Date, '', 0);
  constructor(private router: Router, private facultyService: FacultyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.facultyId = this.route.snapshot.params['facultyId'];
    this.facultyService.getFacultyById(this.facultyId).subscribe(data => {
      this.faculty = data;
    },
      error => console.log(error));
  }
  goToFacultyList() {
    this.router.navigate(['/faculties']);
  }

  goToAdminHomePage() {
    this.router.navigate(['adminhome'])
  }

  goToAddFaculty() {
    this.router.navigate(['create-faculty']);
  }
  goToLoginPage() {
    this
    this.router.navigate(['login']);
  }

  onSubmit() {
    this.facultyService.updateFaculty(this.facultyId, this.faculty).subscribe(data => {
      this.goToFacultyList();
    },
      error => console.log(error));
    console.warn(this.addFacultyForm.value);
  }
  //  get facultyId(){return this.addFacultyForm.get('facultyId')}
  get firstName() { return this.addFacultyForm.get('firstName') }
  get lastName() { return this.addFacultyForm.get('lastName') }
  get userName() { return this.addFacultyForm.get('userName') }
  get password() { return this.addFacultyForm.get('password') }
  get emailId() { return this.addFacultyForm.get('emailId') }
  get gender() { return this.addFacultyForm.get('gender') }
  get dateOfBirth() { return this.addFacultyForm.get('dateOfBirth') }
  get mobileNo() { return this.addFacultyForm.get('mobileNo') }
}
