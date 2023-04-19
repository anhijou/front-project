import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentApi = '';
  constructor(private http:HttpClient) { }
  
  getStudentList(){
    return this.http.get<Student[]>(this.studentApi);
  }
}
