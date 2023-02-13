import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  title = 'ffaSkillsUSA';
  


  alertFail(){
    alert("Attempt Unsuccessful")
  }
  alertButton(){
    alert("I have been pressed.")}
}
