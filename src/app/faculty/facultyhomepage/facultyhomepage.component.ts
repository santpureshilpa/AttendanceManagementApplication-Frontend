import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultyhomepage',
  templateUrl: './facultyhomepage.component.html',
  styleUrls: ['./facultyhomepage.component.css']
})
export class FacultyhomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFacultyList() {
    this.router.navigate(['faculties']);
  }
  goToAddFaculty() {
    this.router.navigate(['create-faculty']);
  }
  goToLoginPage() {
    this.router.navigate(['login']);
  }

  goToAdminHomePage() {
    this.router.navigate(['adminhome'])
  }


}
