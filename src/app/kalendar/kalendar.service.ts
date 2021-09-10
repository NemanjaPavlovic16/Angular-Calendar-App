import { Injectable, EventEmitter } from '@angular/core';
import { Meeting } from './kalendar.model';
@Injectable({
  providedIn: 'root'
})
export class KalendarService {
 
  eventsChanged = new EventEmitter<Meeting[]>();

numberOfEvents = 0;

  constructor() { }

meetings: Meeting[] = [
    new Meeting('8:00', 'Breakfast with Simon', 'Lounge Caffe', 'Discuss Q3 Targets'),
    new Meeting('8:30', 'Daily Standup Meeting (reccuring)', 'Warsaw Sprire Office', ''),
    new Meeting('9:00', 'Call with HRs', '', ''),
    new Meeting('11:00', 'Lunch with Timmoty', 'Canteen', 'Project evaluation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a')
  ];


  getMeetings(){
    return this.meetings.slice();
  }

  deleteMeeting(index: number){
    this.meetings.splice(index, 1);
    this.eventsChanged.next(this.meetings.slice());
  }

  addMeeting(met: Meeting){
    this.meetings.push(met);
    this.eventsChanged.next(this.meetings.slice());
  }

  eventsNumber(){
    return this.numberOfEvents = this.meetings.length;
  }











}
