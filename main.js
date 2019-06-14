// Declaring Gloabla Variables : Time, Greeting, Name and Focus

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Functions

// Display the time.
function displayTime() {
  // Firstly, you need the date.
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // Now, you need to display PM or AM
  // To clarify, this code says that if hour is over 12, display PM.
  // Otherwise, display AM
  let amPm = hours >= 12 ? "PM" : "AM";

  // Display time in a 12 hour format.
  // Currently, hour is displaying 0-23.
  // Using the modulo operator, we can show in a 12 hour display.
  // For example, 13:00 is 12 remainder one, so is shown as 1.
  // Remainder of 12am or 12pm
  hours = hours % 12 || 12;

  // Now, we need to output that time.
  // Don't forget to run this function at the botto of the file.
  time.innerHTML = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${amPm}`;

  // Update once a second.

  setTimeout(displayTime, 1000);
}

// Pad the single digit numbers in minutes and seconds.
// ! The problem you had here was remembering the parseInt function and its syntax.
function padZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// Set the background based on the time of the day
// ! The problem you had here is that you didn't set the time of day.
// Remember, it's not in the same scope as other functions!

function setBackgroundAndGreeting() {
  let today = new Date(),
    hours = today.getHours();
  if (hours < 12) {
    document.body.style.background = "url('img/morning-1.jpg')";
    greeting.innerHTML = "Good morning, ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "white";
  } else if (hours < 18) {
    document.body.style.background = "url('img/afternoon-1.jpg')";
    greeting.innerHTML = "Good afternoon, ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "url('img/night-1.jpg')";
    greeting.innerHTML = "Good evening, ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "white";
  }
}

// SET the NAME for localStorage
function setName(e) {
  if (e.type === "keydown") {
    if (e.which === 13) {
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
    // In case they click away instead of pressing enter
  } else {
    localStorage.setItem("name", e.target.innerHTML);
  }
}
// SET the FOCUS for localStorage
function setFocus(e) {
  if (e.type === "keydown") {
    if (e.which === 13) {
      localStorage.setItem("focus", e.target.innerHTML);
      focus.blur();
    }
    // In case they click away instead of pressing enter
  } else {
    localStorage.setItem("focus", e.target.innerHTML);
  }
}
// GET the NAME from localStorage
function getName(e) {
  if (localStorage.getItem("name") === null) {
    name.innerHTML = "[Enter your name]";
  } else {
    name.innerHTML = localStorage.getItem("name");
  }
}
// GET the FOCUS from localStorage
function getFocus(e) {
  if (localStorage.getItem("focus") === null) {
    focus.innerHTML = "[Set your focus]";
  } else {
    focus.innerHTML = localStorage.getItem("focus");
  }
}
// Add Event Listeners to Name and Focus for localStorage

name.addEventListener("keydown", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keydown", setFocus);
focus.addEventListener("blur", setFocus);

// Run
displayTime();
setBackgroundAndGreeting();
getName();
getFocus();
