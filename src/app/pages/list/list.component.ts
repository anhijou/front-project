import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentsList!: Student[];
  searchTerm: string = '';
  searchStudent!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudentList().subscribe(students => {
      this.studentsList = this.searchStudent = students;
    });
  }
  search(): void {
    this.studentsList = this.searchStudent.filter(student =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      || student.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || student.grade.toString().includes(this.searchTerm.toLowerCase())
      || student.age.toString().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteStudent(id: number | undefined) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.studentsList = this.studentsList.filter(st => st.id != id);
      console.log(id);
    });
  }
}

