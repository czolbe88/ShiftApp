
//helper method for date formatting
export function  formatDate(date) {

    var dayArray: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayOfWeek: number = date.getDay();
    var day: number = date.getDate();
    var monthIndex: number = date.getMonth() + 1;
    var year: number = date.getFullYear();

    return dayArray[dayOfWeek] + ', ' + day + '/' + monthIndex + '/' + year;
  }



