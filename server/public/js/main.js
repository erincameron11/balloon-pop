// Define variables
const balloon = document.getElementById("balloon");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
var randomPop;
var popPlayed = false;

// Hide the balloon and restart button
balloon.style.display = 'none';


// FUNCTION: used to start the balloon blow-up
function start() {
    // Set popPlayed to false
    popPlayed = false;

    // Define variable for random balloon popping threshold
    randomPop = Math.random() * 500;
    console.log(randomPop);

    // Hide the start button, show the balloon
    startButton.hidden = true;
    balloon.style.display = 'inline-block';

    // Set the balloon initial size
    balloon.setAttribute("style", "height:30px; width:21px");

    // Call blow function to use the microphone to increase balloon size
    blow();
}


// FUNCTION: used to inflate the balloon
function blow() {
    navigator.mediaDevices.getUserMedia({
        "audio": true
    })
    .then((stream) => {
        // Define variables for audio analysis and processing
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const mic = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(2048, 1);
        const destination = audioContext.destination;
        const minVolume = 70;

        // Connections
        mic.connect(analyser);
        analyser.connect(processor);
        processor.connect(destination);

        // Add event listener to the processor
        processor.addEventListener("audioprocess", () => {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
            sum += array[i];
            }
            let avg = sum / array.length;

            // If avg volume is over the min
            if(avg > minVolume) {
            // Create a new size for balloon
            // var height = balloon.style.height;
            // var width = balloon.style.width;
            increaseSize(balloon.style.height, balloon.style.width);
            }
        })
    })
    .catch((err) => {
        console.error(err);
    })
}



// FUNCTION: used to increase width of a div
// and to make it into a string with "px" on the end
function increaseSize(height, width) {
    // Define variable for height increase
    var newHeight = "";

    // ---- HEIGHT ----
    // Loop through the height string
    for (let i = 0; i < height.length; i++) {
        // If i == p, stop
        if(height[i] == 'p') {
            // Turn the height string into a number
            var numHeight = Number(newHeight);

            // Increase the height value
            numHeight++;

            // Turn the height number back into a string
            var strHeight = String(numHeight);
            strHeight = "height: " + strHeight + "px";
        }
        // Add the digit to the width
        newHeight = newHeight + height[i];
    }

    // ---- WIDTH ----
    // Width is just 70% of the height
    var newWidth = numHeight * 0.70;

    // Turn the width number back into a string
    var strWidth = String(newWidth);
    strWidth = "width: " + strWidth + "px";

    // Check to see if balloon size exceeds a certain value
    //   if(numHeight > randomPop) {
    if(numHeight > 50) { // for testing
        pop();
    // If not, increase the size of the balloon
    } else {
        // Increase the balloon width
        balloon.setAttribute("style", strHeight + "; " + strWidth);
    }
}


// FUNCTION: used to pop the balloon, play sound, and restart button appears
function pop() {
    // Hide the balloon
    // balloon.style.display = 'none';
    //   balloon.setAttribute("style", "display: none");
    //   balloon.hidden = true;
    //   balloon.setAttribute("style", "visibility: hidden");

    // Reset the balloon size
    // balloon.style.width = "21px";
    // balloon.style.height = "30px";

    // Hide the balloon
    balloon.style.display = 'none';

    // Show the restart button
    restartButton.hidden = false;

    // Play pop sound
    if(!popPlayed) {
        // Set popPlayed to true
        popPlayed = true;

        // Play pop audio
        var pop = new Audio("./assets/pop.mp3");
        pop.play();
    }
}


// FUNCTION: used to restart the balloon game
function restart() {
  // Hide the restart button
  restartButton.hidden = true;

  // Hide the balloon
//   balloon.setAttribute("hidden", "true");
  balloon.style.display = 'none';

  // Show the start button
  startButton.hidden = false;
}