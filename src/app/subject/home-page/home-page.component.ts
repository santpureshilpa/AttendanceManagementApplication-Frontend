import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class SHomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToAddSub()
  {
    this.router.navigate(['create-subject'])
  }
  goToHomePage(){
    this.router.navigate(['home-page'])
  }
  goToSubjectList(){
    this.router.navigate(['/subject-list']);
  }
  goToLoginPage(){
    this.router.navigate(['login'])
  }
  goToAdminHomePage(){
    this.router.navigate(['adminhome'])
  }
}
