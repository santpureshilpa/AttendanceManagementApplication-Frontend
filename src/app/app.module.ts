import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FachomeComponent } from './fachome/fachome.component';

import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { FacultyModule } from './faculty/faculty.module';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
import { AttendanceModule } from './attendance/attendance.module';
import { SubjectModule } from './subject/subject.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FachomeComponent,
    LoginmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FacultyModule,
    FormsModule,
    CourseModule,
    StudentModule,
    AttendanceModule,
    SubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
