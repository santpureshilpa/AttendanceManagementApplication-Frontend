import { UpdateById1Component } from './course/update-by-id1/update-by-id1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FachomeComponent } from './fachome/fachome.component';
import { CreateFacultyComponent } from './faculty/create-faculty/create-faculty.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { HomeComponent } from './home/home.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateByIdComponent } from './faculty/update-by-id/update-by-id.component';
import { CoursehomepageComponent } from './course/coursehomepage/coursehomepage.component';
import { FacultyhomepageComponent } from './faculty/facultyhomepage/facultyhomepage.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { HomePageComponent } from './student/home-page/home-page.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { CreateAttendanceComponent } from './attendance/create-attendance/create-attendance.component';
import { UpdateAttendanceComponent } from './attendance/update-attendance/update-attendance.component';
import { AHomePageComponent } from './attendance/home-page/home-page.component';
import { CreateSubjectComponent } from './subject/create-subject/create-subject.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { UpdateSubjectComponent } from './subject/update-subject/update-subject.component';
import { SHomePageComponent } from './subject/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'adminhome', component: HomeComponent
    },
    {
      path: '', redirectTo: '', pathMatch: 'full', component: LoginmoduleComponent
    },
    {
      path: '', redirectTo: 'facultyhomepage', pathMatch: 'full'
    },
    {
        path: 'fachome', component: FachomeComponent
    },
    {
        path: 'login', component: LoginmoduleComponent
    },
    {
      path: 'faculties', component: FacultyListComponent
    },
    {
      path: 'create-faculty', component: CreateFacultyComponent
    },
    
    {
      path: 'update-faculty/:facultyId', component: UpdateByIdComponent
    },
    {
      path:'courses',component:CourseListComponent
    },
    {
      path:'create-course', component:CreateCourseComponent
    },
    {
      path:'update-course/:courseId',component:UpdateById1Component
    },
    {
      path:'',redirectTo:'coursehomepage' ,pathMatch:'full'
    },
    {
      path:'coursehomepage', component:CoursehomepageComponent
    },
    {
      path:'facultyhomepage', component:FacultyhomepageComponent
    },
    {
      path:'students',component:StudentListComponent
    },
    {
      path:'add', component:CreateStudentComponent
    },
    {
      path:'',redirectTo:'home-page',pathMatch:'full'
    },
    {
      path:'update/:studentId',component:UpdateStudentComponent
    },
    {
      path:'details/:studentId',component:StudentDetailsComponent
    },
    {
      path:'home-page',component:HomePageComponent
    },
    {path:'attendance', component:AttendanceListComponent},
  {path:'create-Attendance', component:CreateAttendanceComponent},
  {path:'update-Attendance/:attendanceId', component:UpdateAttendanceComponent},
  {path:'', redirectTo:'a-home-page', pathMatch:'full'},
  {path:'a-home-page', component:AHomePageComponent},
  {path:"create-subject",component:CreateSubjectComponent},
  {path:"subject-list",component:SubjectListComponent},
  {path:"update-subject/:id",component:UpdateSubjectComponent},
  {path:"home-sub-page",component:SHomePageComponent},

  {path:'', redirectTo:'home-sub-page', pathMatch:'full'}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
