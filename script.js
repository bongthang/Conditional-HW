var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("What is the First Number")); 

var operator=prompt("what operator do you wan to use?(*,/,-,+)")

var num2=Number(prompt("what is the second number"));

var checkee= "num1"=="num2";

if(checkee){containerEle.innerHTML="I am true";
  
}else{
  containerEle.innerHTML="Input a number";
}

if(operator =="+") {
    var answer = num1 + num2;
  document.querySelector(".container").innerHTML= num1+ "+"+num2+"="+answer 
}

if(operator=="-") {
  var answer = num1 - num2;
  document.querySelector(".container").innerHTML= num1+ "-"+num2+"="+answer  
}

if(operator=="*") {
  var answer = num1 * num2;
  document.querySelector(".container").innerHTML= num1+ "*"+num2+"="+answer 
}

if(operator=="/") {
  var answer= num1/num2;
  document.querySelector(".container").innerHTML= num1+ "/"+num2+"="+answer  
}