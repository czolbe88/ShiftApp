
//helper method for date formatting
export function  formatDate(date) {

    var dayArray: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayOfWeek: number = date.getDay();
    var day: number = date.getDate();
    var monthIndex: number = date.getMonth() + 1;
    var year: number = date.getFullYear();

    return dayArray[dayOfWeek] + ', ' + day + '/' + monthIndex + '/' + year;
  }


export function calcTime(offset): Date {


  var d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  // create new Date object for different city
  // using supplied offset
  var nd = new Date(utc + (3600000*offset));

return nd;
}
