import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentApi = 'http://localhost:8080/api/students';
  constructor(private http: HttpClient) { }

  getStudentList() {
    return this.http.get<Student[]>(this.studentApi);
  }
  getStudentByGroup(group: string) {
    const url = `${this.studentApi}/groups/${group}`;
    return this.http.get<Student[]>(url);
  }
  addStudent(student: Student) {
    return this.http.post<Student[]>(this.studentApi, student);
  }
  updateStudent(student: Student) {
    const url = `${this.studentApi}/${student.id}`;
    return this.http.put<Student[]>(url, student);
  }

  deleteStudent(id: number | undefined) {
    const url = `${this.studentApi}/${id}`;
    return this.http.delete<Student>(url);
  }
}
