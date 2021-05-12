import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from './faculty';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  
  private baseURL="http://localhost:9090/Faculty";

  constructor(private httpClient:HttpClient) { }

  getFacultyList():Observable<Faculty[]>
  {
    return this.httpClient.get<Faculty[]>(`${this.baseURL}/getAllFaculties`);
  }
  createFaculty(faculty:Faculty):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/addFaculty`,faculty);
  }
  getFacultyById(facultyId:number):Observable<Faculty>
  {
    return this.httpClient.get<Faculty>(`${this.baseURL}/getFacultyById/${facultyId}`)
  }
  updateFaculty(facultyId:number,faculty:Faculty):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/updateFacultyById/${facultyId}`,faculty);
  }
  deleteFaculty(facultyId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/deleteFacultyById/${facultyId}`,{responseType:'text'})
  }
}
