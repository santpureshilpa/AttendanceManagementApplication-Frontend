import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { UpdateByIdComponent } from './update-by-id/update-by-id.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FacultyhomepageComponent } from './facultyhomepage/facultyhomepage.component';


@NgModule({
  declarations: [
    CreateFacultyComponent,
    FacultyListComponent,
    UpdateByIdComponent,
    DeleteByIdComponent,
    FacultyhomepageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ScrollingModule
  ],
  exports: [
    CreateFacultyComponent,
    FacultyListComponent,
    UpdateByIdComponent
  ]
})
export class FacultyModule { }
