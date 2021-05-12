import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { UpdateById1Component } from './update-by-id1/update-by-id1.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CoursehomepageComponent } from './coursehomepage/coursehomepage.component'
@NgModule({
  declarations: [
    CourseListComponent,
    CreateCourseComponent,
    UpdateById1Component,
    DeleteByIdComponent,
    CoursehomepageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
  ],
  exports:[
    CourseListComponent,
    CreateCourseComponent,
    UpdateById1Component
  ]
})
export class CourseModule { }
