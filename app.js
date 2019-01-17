// 99 bottles of coke on the wall, 99 bottles of coke.
// Take one down, pass it around, 98 bottles of coke on the wall...

//   1 bottle of coke on the wall, 1 bottle of coke.
// Take it down and pass it around, no more bottles of coke on the wall.

//   No more bottles of coke on the wall, no more bottles of coke.
// Go to the store and buy some more, 99 bottles of coke on the wall.

function song(numOfBottles) {
  for (var i = numOfBottles; i >= 0; i--) {
    if (i > 1) {
      console.log(i + " bottles of coke on the wall, " + i + " bottles of coke.");
      console.log("Take one down, pass it around, " + (i - 1) + " bottles of coke on the wall...")
    } else if (i === 1) {
      console.log("1 bottle of coke on the wall, 1 bottle of coke.\nTake it down and pass it around, no more bottles of coke on the wall.")
    } else if (i === 0) {
      console.log("No more bottles of coke on the wall, no more bottles of coke.\nGo to the store and buy some more, " + numOfBottles + " bottles of coke on the wall.");
    }
  }
}

song(3);