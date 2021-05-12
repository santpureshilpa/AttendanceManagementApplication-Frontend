import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToAddStudent() {
    this.router.navigate(['add'])
  }
  goToStudentList() {
    this.router.navigate(['update/:studentId'])
  }
  goToHome() {
    this.router.navigate(['home-sub-page'])
  }
  goToLoginPage() {
    this.router.navigate(['login'])
  }
  goToAdminHomePage() {
    this.router.navigate(['adminhome'])
  }
}
