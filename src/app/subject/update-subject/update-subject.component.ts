import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/subject/subject';
import { SubjectService } from 'src/app/subject/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
  
  addSubjectForm=new FormGroup({
    subjectName:new FormControl('',Validators.required),
    subjectSemester:new FormControl('',Validators.required),
    courseId:new FormControl('',Validators.required),
    facultyId:new FormControl('',Validators.required),
    subjectId:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(10)])

  })
  get subjectName(){return this.addSubjectForm.get('subjectName')}
  get subjectSemester(){return this.addSubjectForm.get('subjectSemester')}
  get courseId(){return this.addSubjectForm.get('courseId')}
  get facultyId(){return this.addSubjectForm.get('facultyId')}
  get subjectId(){return this.addSubjectForm.get('subject')}
  get description(){return this.addSubjectForm.get('description')}

   isDisabled : boolean = true;

  constructor(private route: ActivatedRoute,private router: Router,private subjectService:SubjectService) { }

  id: number =0 ;
  subject:Subject=new Subject(0,0,0,'','','');
 
  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];
    this.subjectService.getSubjectById(this.id).subscribe(data=>
      {this.subject=data;},
      error=>console.log(error));
  }

  onSubmit()
  {
    this.subjectService.updateSubject(this.id,this.subject).subscribe();
    alert("Updated successfully");
    this.router.navigate(['/subject-list']);
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
