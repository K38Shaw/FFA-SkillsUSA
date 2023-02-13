import { Component, OnInit } from '@angular/core';
export interface School {
  teamNumber: number;
  school: string;
  ranking: number;
}
const SCHOOL_DATA: School[] = [
  { ranking: 1, school: "Quinter", teamNumber: 1},
];


@Component({
  selector: 'app-school-data',
  templateUrl: './school-data.component.html',
  styleUrls: ['./school-data.component.css']
})
export class SchoolDataComponent implements OnInit {
  displayedColumns: string[] = ['ranking', 'school', 'teamNumber'];
  dataSource = SCHOOL_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
