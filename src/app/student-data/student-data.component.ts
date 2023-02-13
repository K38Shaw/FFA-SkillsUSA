import { Component, OnInit } from '@angular/core';
export interface Student {
  name: string;
  teamNumber: number;
  school: string;
  ranking: number;
}
const STUDENT_DATA: Student[] = [
  {name: "Caleb", ranking: 1, school: "Quinter", teamNumber: 1},
];
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  displayedColumns: string[] = ['ranking', 'name', 'school', 'teamNumber'];
  dataSource = STUDENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
