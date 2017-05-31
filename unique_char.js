


function countLetters(str){
  var strT = str.replace(/\s/g, ""); // get rid of all the spaces
  strT = strT.split("");// turn a string into a char array
  var result = {};

  for(var i = 0; i < strT.length; i++){
      var temp = strT[i];
      if(result[temp]) { // if the field already exists if there is duplicate of this char.
          result[temp]++;
      }
      else{ // the field does not exitst, then create a field and set the count to 1
        result[temp] = 1;
      }
  }
  return result;
}


var letters = "lighthouse in the house";
console.log(countLetters(letters));
