 //shift + alt + down   
var lines = {
        'N': ['Times Square','34th','28th','23rd','Union Square','8th'],
        '6': ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'], 
        'L': ['8th','6th','Union Square','3rd','1st']
    }

 function getStopString(line,startStop, endStop){
     var lineArray = lines[line];
     var stopString = ""; //store the staions name
     var startIndex = lineArray.indexOf(startStop);
     var endIndex = lineArray.indexOf(endStop);
     var numberOfStep = 0;
    
     //I need to compare the indexs to know if im going forward or backword
    //Go forward
     if(startIndex < endIndex) {
     for(var i = startStop + 1 ; i<= endStop ; i++){ //startStop + 1 beacuse i dont want to print the current station
        stopString+= lineArray[i] + ', ';
        numberOfStep ++;
     }
 } 
    else { //Go backward
        for(var i = startStop - 1 ; i >= endStop ; i--){ //startStop + 1 beacuse i dont want to print the current station
            stopString+= lineArray[i] + ', ';
            numberOfStep ++;
         }
    }} 
    
 function planTrip(from_subway,from_station,to_subway,to_station) { 
     if(from_subway === to_subway ){

     } else {

     }
}