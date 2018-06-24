import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {formatDate} from '../../utility/dateUtility';

@Component({
  selector: 'page-about',
  templateUrl: 'ems.html'
})
export class AboutPage implements OnInit {

  datePicker: string;
  D1R1N1R4: Date = new Date(2018, 6, 8, 8, 0); // 8th July
  emsShift: {};


  constructor(public navCtrl: NavController) {


  }

  ngOnInit(){

    console.log("ref point: ", this.D1R1N1R4);
    this.datePicker = formatDate(new Date());
    this.getShift();

  }


  //Used to update the ems shift
  getShift(d?: string) {


    var testTime: Date = new Date(2018, 6, 16, 7, 55); //testing
    var thisTime: Date = new Date();

    if (d != undefined) {

      var dDateTime: Date = new Date(new Date(d).getTime() + (1000 * 60 * 8));

      console.log(dDateTime);

      thisTime = dDateTime;
    }

    var diff: number = thisTime.getTime() - this.D1R1N1R4.getTime();
    var elapsedDays: number = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24))); //elapsed number of days
    console.log("elapsed days: ", elapsedDays);

    var shiftNum: {} = 0;

    switch(elapsedDays % 8){

      case(1): shiftNum = {Day: 1, Night: 4};
        break;

      case(2): shiftNum = {Day:2 , Night: 3};
        break;

      case(3): shiftNum = {Day:2 , Night: 3};
        break;

      case(4): shiftNum = {Day:4 , Night: 1};
        break;

      case(5): shiftNum = {Day:4 , Night: 1};;
        break;

      case(6): shiftNum = {Day:3 , Night: 2};
        break;

      case(7): shiftNum = {Day:3 , Night: 2};
        break;

      case(0): shiftNum = {Day: 1 , Night: 4};
        break;

    }

    this.emsShift =  shiftNum;
    console.log(this.emsShift);


  }
}
