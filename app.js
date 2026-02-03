

// Set the date we're counting down to
var countDownDate = new Date("Nov 24, 2024 20:00:00").getTime();
var confettiInterval = null;
var heartImage = null;

// Create heart image for confetti
function createHeartImage() {
  if (heartImage && heartImage.complete) return heartImage;
  
  var canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;
  var ctx = canvas.getContext('2d');
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❤️', 10, 10);
  
  var img = new Image();
  img.src = canvas.toDataURL();
  img.onload = function() {
    heartImage = img;
  };
  heartImage = img; // Set immediately even if not loaded yet
  return img;
}

// Function to trigger confetti with heart shapes
function triggerConfetti() {
  var colors = ['#e12d73', '#ea7771', '#e23d74', '#e34d75', '#e45d76'];
  
  try {
    var heart = createHeartImage();
    // Try with heart shape
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: colors,
      shapes: [heart]
    });
  } catch (e) {
    // Fallback to regular confetti if heart shape fails
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: colors
    });
  }
}

// Get elapsed time display string (for when date has passed)
function getElapsedTimeDisplay(distance) {
  var timePassed = Math.abs(distance);
  var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timePassed % (1000 * 60)) / 1000);
  if (days > 365) {
    var years = Math.floor(days / 365);
    var remainingDays = days % 365;
    return years + "y " + remainingDays + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

// Check immediately on page load if date has passed
function checkAndStartConfetti() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  if (distance < 0) {
    // Show elapsed time immediately so confetti triggers "as soon as time is displayed"
    var countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.innerHTML = getElapsedTimeDisplay(distance);
    }
    // Start confetti interval and trigger first confetti right away
    triggerConfetti();
    if (!confettiInterval) {
      confettiInterval = setInterval(triggerConfetti, 5000); // Trigger every 5 seconds
      triggerConfetti();
    }
  }
}

// Check on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAndStartConfetti);
} else {
  checkAndStartConfetti();
}

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // If the count down is over, calculate time passed
  if (distance < 0) {
    // Start confetti interval if not already started
    if (!confettiInterval) {
      confettiInterval = setInterval(triggerConfetti, 5000); // Trigger every 5 seconds
      triggerConfetti(); // Trigger immediately
    }
    
    // Calculate time that has passed (absolute value)
    var timePassed = Math.abs(distance);
    
    // Time calculations for days, hours, minutes and seconds that have passed
    var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timePassed % (1000 * 60)) / 1000);
    
    // If more than 365 days have passed, show years instead
    var timeDisplay;
    if (days > 365) {
      var years = Math.floor(days / 365);
      var remainingDays = days % 365;
      timeDisplay = years + "y " + remainingDays + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    } else {
      timeDisplay = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    }
    
    // Output the time that has passed
    document.getElementById("countdown").innerHTML = timeDisplay;
  } else {
    // Time calculations for days, hours, minutes and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
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