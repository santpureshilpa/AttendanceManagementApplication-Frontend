import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from '../faculty';
import {FacultyService} from '../faculty.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  faculty: Faculty[] = [];
  original_list: Faculty[]=[];
  listFilter: string='';

  constructor(private facultyService: FacultyService, private router:Router) { }

  ngOnInit(): void {
    this.getFaculties();
  }
  goToAdminHomePage(){
    this.router.navigate(['adminhome'])
  }

  goToLoginPage(){
    this.router.navigate(['login']);
  }
  
  goToAddFaculty(){
    this.router.navigate(['create-faculty'])
  }
  filter_faculty(){
    if(this.listFilter){
      this.faculty = [];
      for(let f of this.original_list){
        if(('' + f.facultyId).includes(this.listFilter) || f.firstName.toLowerCase().includes(this.listFilter.toLowerCase())){
          this.faculty.push(f)
        }
      } 
    }
    else{
      this.faculty=this.original_list;
    }
    // this.faculty = this.original_list.filter(x => ''+ x.facultyId==this.listFilter)
    
  }

  private getFaculties(){
    this.facultyService.getFacultyList().subscribe(data =>{
      this.faculty = data;
      this.original_list=data;
    });
  }
  updateFaculty(facultyId: number){
    this.router.navigate(['update-faculty', facultyId])
  }
  deleteFaculty(facultyId:number)
  {
    this.facultyService.deleteFaculty(facultyId).subscribe(data=>
      {
        alert("deleted successfully");
        location.reload();
        
      });
    }
}
