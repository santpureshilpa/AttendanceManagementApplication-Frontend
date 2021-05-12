import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class AHomePageComponent implements OnInit {
  // #region Constructors (1)

  constructor(public router:Router) { }

  // #endregion Constructors (1)

  // #region Public Methods (4)

  public goToAttendanceList(){
    this.router.navigate(['/attendance'])
  }

  public goToCreateAttendance(){
    this.router.navigate(['create-Attendance']);
  }

  public goToHomePage(){
    this.router.navigate(['a-home-page'])
  }
  goToLoginPage(){
    this.router.navigate(['login'])
  }
  goToAdminHomePage(){
    this.router.navigate(['adminhome'])
  }

  public ngOnInit(): void {
  }

  // #endregion Public Methods (4)
}
