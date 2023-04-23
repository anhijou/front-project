import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  student!: Student;

  constructor(private route: ActivatedRoute, private studentServices: StudentService) { }

  ngOnInit() {
    const studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.studentServices.getStudentList().subscribe(student => {
      let indx = student.findIndex(student => student.id == studentId);
      if (indx !== -1) {
        this.student = student[indx];
      }
    });
  }

}
