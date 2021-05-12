import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.css']
})
export class CreateAttendanceComponent implements OnInit {

  public attendance: Attendance = new Attendance(0, "", "", 0, 0);
  public loginForm = new FormGroup({
    roll: new FormControl('', Validators.required),
    subjectId: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  constructor(private attendanceService: AttendanceService,
    private router: Router) { }

  public get date() { return this.loginForm.get('date') }

  public get roll() { return this.loginForm.get('roll') }

  public get status() { return this.loginForm.get('status') }

  public get subjectId() { return this.loginForm.get('subjectId') }

  // #endregion Public Accessors (4)

  // #region Public Methods (4)

  public ngOnInit(): void {
  }

  public onSubmit() {
    this.saveAttendance();
  }

  public saveAttendance() {
    this.attendanceService.createAttendance(this.attendance).subscribe(data => {
      console.log(data);
      this.goToAttendanceList();
    },
      error => console.log(error));
  }

  public goToCreateAttendance() {
    this.router.navigate(['create-Attendance']);
  }
  public goToAttendanceList() {
    this.router.navigate(['/attendance'])
  }
  public goToHomePage() {
    this.router.navigate(['a-home-page'])
  }
  // #endregion Public Methods (4)
}
