import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursehomepage',
  templateUrl: './coursehomepage.component.html',
  styleUrls: ['./coursehomepage.component.css']
})
export class CoursehomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCourseList(){
    this.router.navigate(['courses']);
  }
  goToAddCourse(){
    this.router.navigate(['create-course']);
  }
  goToLoginPage(){
    this.router.navigate(['login'])
  }
  goToAdminHomePage(){
    this.router.navigate(['adminhome'])
  }

}
