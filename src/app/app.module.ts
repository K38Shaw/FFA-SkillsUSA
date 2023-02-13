import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDataComponent } from './student-data/student-data.component';
import { SchoolDataComponent } from './school-data/school-data.component';
import { ReadDataComponent } from './read-data/read-data.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    StudentDataComponent,
    SchoolDataComponent,
    ReadDataComponent,
    EventScheduleComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule, 
    MatTableModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
