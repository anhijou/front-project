import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupList!: Student[];



  constructor(private studentServices: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let group = this.activatedRoute.snapshot.params['group'];
    this.studentServices.getStudentByGroup(group).subscribe(group => {
      this.groupList = group;
      if (this.groupList == null) {
        console.log('errur');
        this.router.navigateByUrl('list');
      } else if (this.groupList.length === 0) {
        console.log('there is no student in this list');
      }
    });
  }



  deleteStudent(id: number | undefined) {
    this.studentServices.deleteStudent(id).subscribe(() => {
      this.groupList = this.groupList.filter(st => st.id != id);
      console.log(id);
    });
  }

}


