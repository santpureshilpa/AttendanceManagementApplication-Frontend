import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseURL = "http://localhost:9090/Attendance";
  

  constructor(private httpClient: HttpClient) { }

  getAttendanceList() : Observable<Attendance[]>
  {
    return this.httpClient.get<Attendance[]>(`${this.baseURL}/getAllAttendance`);
  }

  createAttendance(attendance : Attendance):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/addAttendanceWithStudentIdAndSubjectId`,attendance);
  }

  getAttendanceById(attendanceId : number):Observable<Attendance>
  {
    return this.httpClient.get<Attendance>(`${this.baseURL}/getAttendanceById/${attendanceId}`)
  }

  updateAttendance(attendanceId : number, attendance : Attendance):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/updateAttendance/${attendanceId}`,attendance);
  }
}
