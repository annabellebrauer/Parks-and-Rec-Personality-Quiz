//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var chrisScore = 0;
var leslieScore = 0;
var ronScore = 0;
var aprilScore = 0;
var jerryScore = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", chris);
q1a2.addEventListener("click", leslie);
q1a3.addEventListener("click", ron);
q1a4.addEventListener("click", april);
q1a5.addEventListener("click", jerry);

q2a1.addEventListener("click", chris);
q2a2.addEventListener("click", leslie);
q2a3.addEventListener("click", ron);
q2a4.addEventListener("click", april);
q2a5.addEventListener("click", jerry);

q3a1.addEventListener("click", chris);
q3a2.addEventListener("click", leslie);
q3a3.addEventListener("click", ron);
q3a4.addEventListener("click", april);
q3a5.addEventListener("click", jerry);

q4a1.addEventListener("click", chris);
q4a2.addEventListener("click", leslie);
q4a3.addEventListener("click", ron);
q4a4.addEventListener("click", april);
q4a5.addEventListener("click", jerry);


//disabling buttons
q1a1.addEventListener("click", disableButton1);
q1a2.addEventListener("click", disableButton1);
q1a3.addEventListener("click", disableButton1);
q1a4.addEventListener("click", disableButton1);
q1a5.addEventListener("click", disableButton1);

q2a1.addEventListener("click", disableButton2);
q2a2.addEventListener("click", disableButton2);
q2a3.addEventListener("click", disableButton2);
q2a4.addEventListener("click", disableButton2);
q2a5.addEventListener("click", disableButton2);

q3a1.addEventListener("click", disableButton3);
q3a2.addEventListener("click", disableButton3);
q3a3.addEventListener("click", disableButton3);
q3a4.addEventListener("click", disableButton3);
q3a5.addEventListener("click", disableButton3);

q4a1.addEventListener("click", disableButton4);
q4a2.addEventListener("click", disableButton4);
q4a3.addEventListener("click", disableButton4);
q4a4.addEventListener("click", disableButton4);
q4a5.addEventListener("click", disableButton4);


//#TODO: Define quiz functions here

function disableButton1(){
  document.getElementById("q1a1").disabled=true
  document.getElementById("q1a2").disabled=true
  document.getElementById("q1a3").disabled=true
  document.getElementById("q1a4").disabled=true
  document.getElementById("q1a5").disabled=true
}
//alert("Now answer question 2.")}
  
function disableButton2(){
  document.getElementById("q2a1").disabled=true
  document.getElementById("q2a2").disabled=true
  document.getElementById("q2a3").disabled=true
  document.getElementById("q2a4").disabled=true
  document.getElementById("q2a5").disabled=true


}
function disableButton3(){
  document.getElementById("q3a1").disabled=true
  document.getElementById("q3a2").disabled=true
  document.getElementById("q3a3").disabled=true
  document.getElementById("q3a4").disabled=true
  document.getElementById("q3a5").disabled=true
}
function disableButton4(){
  document.getElementById("q4a1").disabled=true
  document.getElementById("q4a2").disabled=true
  document.getElementById("q4a3").disabled=true
  document.getElementById("q4a4").disabled=true
  document.getElementById("q4a5").disabled=true

}



function chris(){
    questionCount = questionCount + 1;
    chrisScore += 1;
  //alert("point for chris");
  if (questionCount >= 4){
    updateResult();
  }
}

function leslie(){
    questionCount += 1;
    leslieScore += 1;
  if (questionCount >= 4){
    updateResult();
  }
}

function ron(){
    questionCount += 1;
    ronScore += 1;
  if (questionCount >= 4){
    updateResult();
  }
}

function april(){
    questionCount += 1;
    aprilScore += 1;
  if (questionCount >= 4){
    updateResult();
  }
}

function jerry(){
    questionCount += 1;
    jerryScore += 1;
  if (questionCount >= 4){
    updateResult();
  }
}

function updateResult(){

  if (chrisScore >= 2) {
    result.innerHTML= "You are Chris Traeger! You're enthusiastic, fun loving, and friendly. All you strive for in life is happiness for yourself and others."
                      

  }
  else if (leslieScore >= 2) {
    result.innerHTML= "You are Leslie Knope! You're a hard worker, but you also spend a lot of time caring for those around you. When you love what you do, there's nothing stopping you."
  }
  else if (ronScore >= 2) {
    result.innerHTML= "You are Ron Swanson! You couldn't care less of what people think of you, and you crave a simple life. Because of your disinterest in others, you probably spend a lot of time on your hobbies and like being alone."
  }
  else if (aprilScore >= 2) {
    result.innerHTML= "You are April Ludgate! You're that one person that everyone is scared of but wants to be friends with. All eyes are on you when you walk into the room, but you're probably not the most responsible."
  }
  else if (jerryScore >= 2) {
    result.innerHTML= "You are Jerry Gergich! Somehow you managed to choose the most boring, predictble choices available. You're a good person, but you don't draw too much attention to yourself. You wish people respected you more, but doing anything about it is too much effort. "
  }
  else{
    result.innerHTML = "You don't seem to fit any of the characters perfectly. Either you're a unique and unpredictable person or you just happened to choose an equal amount of each character's answers. Feel free to reload the page and try again with your second choices for a new result!"
 }
  
}




// disabling buttons
