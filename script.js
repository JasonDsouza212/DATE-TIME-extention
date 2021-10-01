var currentdate = new Date(); 
var datetime = "Date: " + currentdate.getDate();
var year =  "Year: " + currentdate.getFullYear() ;
var day;
var month ;
var time ="time: " + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
//===========================================================================
// To calculate Day                
switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
    default:
    day = "Unknown Day";
}
//===========================================================================
// To calculate Month   
switch (new Date().getMonth()) {
    case 0:
    month = "January";
    break;
    case 1:
    month = "February";
    break;
    case 2:
    month = "March";
    break;
    case 3:
    month = "April";
    break;
    case 4:
    month = "May";
    break;
    case 5:
    month = "June";
    break;
    case 6:
    month = "July";
    break;
    case 7:
    month = "August";
    break;
    case 8:
    month = "September";
    break;
    case 9:
    month = "October";
    break;
    case 10:
    month = "November";
    break;
    case 11:
    month = "December";
    break;
    default:
    month = "Unknown Day";
}
//===========================================================================
                    
    var ToSetDate=document.getElementById('date');
    var ToSetMonth=document.getElementById('month');
    let ToSetDay=document.getElementById('day');
    var ToSetYear=document.getElementById('year');
    var ToSetTime=document.getElementById('time');
    ToSetDate.innerHTML=datetime;
    ToSetMonth.innerHTML="Month: "+month;
    ToSetDay.innerHTML="Day: "+day;
    ToSetYear.innerHTML=year;
    ToSetTime.innerHTML=time;