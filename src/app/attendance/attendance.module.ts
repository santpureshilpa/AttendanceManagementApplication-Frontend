import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { AHomePageComponent } from './home-page/home-page.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';

@NgModule({
  declarations: [
    AttendanceListComponent,
    CreateAttendanceComponent,
    AHomePageComponent,
    UpdateAttendanceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports:[
    AttendanceListComponent,
    CreateAttendanceComponent,
    AHomePageComponent,
    UpdateAttendanceComponent
  ]
})
export class AttendanceModule { }
