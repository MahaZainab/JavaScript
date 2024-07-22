// In this code we will understand the topic of Events in JavaScript
/**
 * he user selects, clicks, or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or ends.
An error occurs.
 * 
 *  */ 
// Sytax
//element.addEventListener(event, function, useCapture);
/***
 * element: The HTML element to which the event listener is attached.
event: The type of event (e.g., 'click', 'keydown').
function: The function to execute when the event occurs.
useCapture (optional): Boolean value that specifies whether the event should be captured or bubbled. Defaults to false.
 * 
 */

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// Removing Listener
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);
function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  }
  