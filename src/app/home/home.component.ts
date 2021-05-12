import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCourseHome(){
    this.router.navigate(['coursehomepage'])
  }

  goToFacultyHome(){
    this.router.navigate(['facultyhomepage'])
  }
  goToLoginPage(){
    
    this.router.navigate(['login'])
  }
  goToStudentHome(){
    this.router.navigate(['home-page'])
  }
  goToSubject(){
    this.router.navigate(['home-sub-page'])
  }
}
