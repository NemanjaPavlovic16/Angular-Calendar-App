import { Component, OnInit } from '@angular/core';
import { Meeting } from './kalendar.model';
import { WeatherService } from 'src/app/weather.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {KalendarService} from './kalendar.service';
@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {



public meetings: Meeting[] = [];
public met:Meeting;


public weather: any;
public temp;
celsius: number;
  temp_min: number;
  temp_max: number;
  main: string;

  public eventName: string;
  public eventTime: string;
  public eventLocation: string;
  public eventDesc: string;
  public eventsNumber;


  

  constructor(private weatherSr: WeatherService, private modalService: NgbModal, private kalendarSr: KalendarService) {
  
   }

delete(index: number){
this.kalendarSr.deleteMeeting(index);
}


  ngOnInit() {


this.kalendarSr.eventsChanged.subscribe(item=>{
      this.eventsNumber = this.kalendarSr.eventsNumber();
      this.meetings = this.kalendarSr.getMeetings();
  })



this.weatherSr.getWeather().subscribe((response) =>{
      console.log(response);
      this.weather = response;

      this.celsius = Math.floor(this.weather.list[0].main.temp);
      this.temp_min = Math.round(this.weather.list[0].main.temp_min * 10) / 10;
      this.temp_max = Math.round(this.weather.list[0].main.temp_max * 10) / 10;

      this.main = this.weather.list[0].weather[0].main;
      this.meetings = this.kalendarSr.getMeetings();
      this.eventsNumber = this.kalendarSr.eventsNumber();
});



     }
     closeResult: string;


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

add(){

   
   this.met = new Meeting(this.eventTime, this.eventName, this.eventLocation, this.eventDesc);
    this.kalendarSr.addMeeting(this.met);

	this.modalService.dismissAll();

}


    }

