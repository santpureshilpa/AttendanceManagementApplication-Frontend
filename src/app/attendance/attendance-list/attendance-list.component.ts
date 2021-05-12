import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {


  attendances: Attendance[] = [];
  original_list: Attendance[] = [];
  listFilter: string = '';
  constructor(private attendanceService: AttendanceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllAttendance();
  }

  filter_Attendance() {
    if (this.listFilter) {
      this.attendances = [];
      for (let a of this.original_list) {
        if (('' + a.studentId).includes(this.listFilter) ||
          a.status.toLowerCase().includes(this.listFilter.toLowerCase())) {
          this.attendances.push(a)
        }
      }
    }
    else {
      this.attendances = this.original_list;
    }
  }

  getAllAttendance() {
    this.attendanceService.getAttendanceList().subscribe(data => {
      this.attendances = data;
      this.original_list = data;
    })
  }

  updateAttendance(attendanceId: number) {
    this.router.navigate(['update-Attendance', attendanceId]);
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
