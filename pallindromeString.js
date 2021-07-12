function splitString(str)
{
    return str.split(" ");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function checkPallindrome(str)
{
  if(str.length>1)
  {
    let strRev=reverseString(str);
    if(str.toLowerCase()==strRev.toLowerCase())
    {
      console.log(str);
    }
  }
}

let str="I like a racecar";
var myArr=splitString(str);
for (var i = 0; i < myArr.length; i++) {
    checkPallindrome(myArr[i]);
}