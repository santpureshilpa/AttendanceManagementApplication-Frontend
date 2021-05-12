import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {

  updateForm = new FormGroup({
    id: new FormControl('', Validators.required),
    roll: new FormControl('', Validators.required),
    subjectId: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })
  public get id() { return this.updateForm.get('id') }
  public get date() { return this.updateForm.get('date') }
  public get roll() { return this.updateForm.get('roll') }
  public get status() { return this.updateForm.get('status') }
  public get subjectId() { return this.updateForm.get('subjectId') }



  isDisabled: boolean = true;
  attendanceId: number = 0;
  attendance: Attendance = new Attendance(0, "", "", 0, 0);


  constructor(private attendanceService: AttendanceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.attendanceId = this.route.snapshot.params['attendanceId'];
    this.attendanceService.getAttendanceById(this.attendanceId).subscribe(data => {
      this.attendance = data;
    },
      error => console.log(error));

  }
  onSubmit() {
    this.attendanceService.updateAttendance(this.attendanceId, this.attendance).subscribe(data => {
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
}
