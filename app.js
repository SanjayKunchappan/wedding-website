

// Set the date we're counting down to
var countDownDate = new Date("Nov 24, 2024 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "YAYYYYYYYYYY";
  }
}, 1000);


function toggleTheme() { 
  // Obtains an array of all <link> 
  // elements. 
  // Select your element using indexing. 
  var theme = document.getElementsByTagName('link')[0]; 

  // Change the value of href attribute  
  // to change the css sheet. 
  if (theme.getAttribute('href') == 'styles.css') { 
      theme.setAttribute('href', 'style2.css'); 
  } 
  else if(theme.getAttribute('href') == 'style2.css') { 
    theme.setAttribute('href', 'style3.css'); 
} 

  
  else { 
      theme.setAttribute('href', 'styles.css'); 
  } 
}