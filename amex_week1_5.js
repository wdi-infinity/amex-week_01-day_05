// Bouns solution..

function singSong(start, end){
  for(var i = start; i>=end; i-- ){

    if (i === 1){
      console.log("1 bottle of coke on the wall, 1 bottle of coke.");
      console.log("Take it down and pass it around, no more bottles of coke on the wall.");
      console.log("\n");
      continue;}

    if (i === 0){
      console.log("No more bottles of coke on the wall, no more bottles of coke.");
      console.log("Go to the store and buy some more, " + start + " bottles of coke on the wall.");
      console.log("\n");
      break;}

    console.log(i + " bottles of coke on the wall, "+ i + " bottles of coke.");
    console.log("Take one down, pass it around, " + (i - 1) + " bottles of coke on the wall...");
    console.log("\n");
  } // for loop ends heer

}