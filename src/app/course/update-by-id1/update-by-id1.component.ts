
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-by-id1',
  templateUrl: './update-by-id1.component.html',
  styleUrls: ['./update-by-id1.component.css']
})
export class UpdateById1Component implements OnInit {
  addCourseForm = new FormGroup(
    {
      courseId: new FormControl(0, Validators.required),
      courseName: new FormControl('', Validators.required),
      discription: new FormControl('', [Validators.required, Validators.minLength(10)])
    }
  )


  courseIdd: number = 0;
  course: Course = new Course(0, '', '');
  constructor(private router: Router, private courseService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseIdd = this.route.snapshot.params['courseId'];
    this.courseService.getCourseById(this.courseIdd).subscribe(data => {
      this.course = data;
    },
      error => console.log(error));
  }
  goToCourseList() {
    this.router.navigate(['/courses']);
  }
  onSubmit() {
    this.courseService.updateCourse(this.courseIdd, this.course).subscribe(data => {
      this.goToCourseList();
    },
      error => console.log(error));
    console.warn(this.addCourseForm.value)
  }
  get courseId() {
    return this.addCourseForm.get('courseId')
  }
  get courseName() {
    return this.addCourseForm.get('courseName')
  }
  get discription() {
    return this.addCourseForm.get('discription')
  }

  isDisabled = true;
  goToLoginPage() {
    this.router.navigate(['login'])
  }
  goToAdminHomePage() {
    this.router.navigate(['adminhome'])
  }
  goToAddCourse() {
    this.router.navigate(['create-course'])
  }
  goToCourses() {
    this.router.navigate(['courses'])
  }
}
