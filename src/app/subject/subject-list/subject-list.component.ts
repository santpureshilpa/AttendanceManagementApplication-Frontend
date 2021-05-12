import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/subject/subject';
import { SubjectService } from 'src/app/subject/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  orgin_list: Subject[] = [];
  listFilter: string = '';





  subjects: Subject[]=[];
  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.getSubjectList();
  }

  getSubjectList() {

    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data
      this.orgin_list = data
    });

  }

  updateSubject(id: number) {
    this.router.navigate(['update-subject', id]);
  }

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id).subscribe(
      data => {
        alert("Subject has deleted successfully");
        this.getSubjectList();
      }
      ,
      error => {
        console.log(error);
        alert("Deletion failed");
      }
    );

  } filter_subject() {
    if (this.listFilter) {
      this.subjects = [];
      for (let c of this.orgin_list) {
        if ('' + c.subjectId == this.listFilter || c.subjectName.toLowerCase().includes(this.listFilter.toLowerCase())) {
          this.subjects.push(c)
        }
      }
    }
    else {
      this.subjects = this.orgin_list;
    }
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
}
