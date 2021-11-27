// This function for timer
var timerInterval = setInterval(function() { 
    //seconds--;
    if (seconds > -1) {
      timer.textContent = 'Time: ' + seconds;
    seconds--;
    }

    else{
      timer.textContent = 'Time up';
      
     }

    if (seconds === 0 || questions.length === questionCount) {
      clearInterval(timerInterval);      
    }
    document.querySelector("#timer").innerHtml =  `${minutes} : ${seconds}`;
 
  }, 1000);


