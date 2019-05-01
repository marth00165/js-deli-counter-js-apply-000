var katzDeliLine = []; //beginning of the day.. empty Deli 
var customer =0;

function takeANumber(katzDeliLine){
   
   customer++
   
   katzDeliLine.push(customer)
   
  return ("Welcome, customer you are number " + customer)
 
  
  }

function nowServing(katzDeliLine){ // serving line
  if (katzDeliLine.length === 0){
    
    return "There is nobody waiting to be served!";
  }
  else {
    
    return ('Currently serving ' + katzDeliLine.shift() + ".");
  }
  
}

var badabadabingbing = []; // line number

function currentLine(katzDeliLine){  // position in line
  for (  let i = 0; 
  i < katzDeliLine.length; 
  i++  )
  {
    badabadabingbing.push(` `+[i+1]+`. `  + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + badabadabingbing);
}

