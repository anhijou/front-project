import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentForm !: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      'id': null,
      'name': ['', Validators.required],
      'age': '',
      'email': ['', Validators.required],
      'grade': '',
      'group': '',
    });


    const studentId = Number(this.route.snapshot.paramMap.get('id'));
    if (studentId) {
      this.getProductDetails(studentId);

    }
  }

  getProductDetails(studentId: number) {
    this.studentService.getStudentList().subscribe(student => {
      const index = student.findIndex(student => student.id === studentId);
      if (index != -1) {

        this.studentForm.setValue({
          id: student[index].id,
          name: student[index].name,
          age: student[index].age,
          email: student[index].email,
          grade: student[index].grade,
          group: student[index].group

        });
      }

    });
  }
  onSubmit(studentForm: FormGroup) {
    if (studentForm.valid) {

      const studentid = Number(this.route.snapshot.paramMap.get('id'));
      let student = studentForm.value;
      if (studentid) {

        this.studentService.updateStudent(student).subscribe();
        console.log(this.studentService.getStudentList());
        console.log(student);
        console.log("update");
      } else {

        this.studentService.addStudent(student).subscribe();
        console.log(student);
        console.log(this.studentService.getStudentList());
        console.log("create");
      }

      const currentPath = window.location.pathname;
      const pattern = /^\/group\/\w+\/form\/\w+$/; // Replace with the pattern you want to match
      if (pattern.test(currentPath)) {
        // The current path matches the pattern
        this.router.navigateByUrl('../..');
      } else {
        // The current path does not match the pattern
        this.router.navigateByUrl('/list');
      }
    }
  }
}
