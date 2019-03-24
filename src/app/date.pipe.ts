import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateC'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today:Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference=Math.abs(value-todayWithNoTime);
    const secondsInADay=86400;
    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCount =dateDifferenceSeconds/secondsInADay;
    if(dateCount>=1 && value>todayWithNoTime){
      return 0;
    }else{
      return Math.round(dateCount);// rounds to nearest value 
    }

  }

}
