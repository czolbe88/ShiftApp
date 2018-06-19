import {Component, OnInit, Optional} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  datePicker: string;
  rotaShift: number;
  r3 = new Date( 2017, 5 , 29); //last known rota 3 date


  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){


    this.datePicker = this.formatDate(new Date());
    this.getShift();

    // setInterval(() => {         //replaced function() by ()=>
    //   this.rotaShift = this.getShift();
    //   this.dateNow = this.formatDate(new Date());
    // }, 1000);

  }

  ionViewWillEnter(){

    console.log("ionViewWillEnter fired");

  }



  //helper method for date formatting
   formatDate(date) {

    var dayArray: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayOfWeek: number = date.getDay();
    var day: number = date.getDate();
    var monthIndex:number = date.getMonth();
    var year:number = date.getFullYear();

    return dayArray[dayOfWeek] + ', ' + day + '/' + monthIndex + '/' + year;
  }

//Used to update the rota shift
  getShift(d?: string) {

    var testTime: Date = new Date(2018, 6, 16, 7, 55); //testing
    var thisTime: Date = new Date(); //default date = today 0800

    if(d != undefined) {

      var dDateTime: Date = new Date(new Date(d).getTime() +  (1000*60*8));

      console.log(dDateTime);

      thisTime = dDateTime;
    }

    var diff:number = thisTime.getTime() - this.r3.getTime();
    var elapsedDays: number = Math.floor( diff/(1000 * 60 * 60 *24) ); //elapsed number of days

    //console.log(elapsedDays);
    var hours: number = thisTime.getHours();
    //console.log(hours);

    if (((elapsedDays + 1) %3 == 0  && hours<8)   || (elapsedDays%3 ==0 && hours>=8) ) {

      this.rotaShift = 3;


    }

    else if ((elapsedDays%3 ==0 && hours<8) ||  ( (elapsedDays -1)%3 == 0 && hours>=8  )){
      this.rotaShift = 2;

    }

    else if (( (elapsedDays-1)%3 ==0 && hours<8) || ((elapsedDays + 1) %3 == 0  && hours>=8) ){
      this.rotaShift = 1;

    }

  }



}
