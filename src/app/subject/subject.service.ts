import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseURL = "http://localhost:9090/attendancemanagement/subject";

  constructor(private httpClient: HttpClient) { }

  getSubjectList(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseURL}`);
  }

  createSubject(subject:Subject): Observable<Subject>{
    return this.httpClient.post<Subject>(`${this.baseURL}`,  subject);
  }

  getSubjectById(id: number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseURL}/${id}`);
  }

  updateSubject(id: number, subject:Subject): Observable<Subject>{
    return this.httpClient.put<Subject>(`${this.baseURL}/${id}`,  subject);
  }

  deleteSubject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType: 'text'});
  }

}
