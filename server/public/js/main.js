// Baseline sound: average = 1-3
// Regular blowing: average = 20-30
// Hard blowing: average = 70-100


// TO MAKE POP WITH JAVASCRIPT ONLY
// function play() {
//     var pop = new Audio("https://github.com/erincameron11/balloon-pop/raw/main/server/public/assets/pop.mp3");
//     pop.play();
// }






// Using https://www.youtube.com/watch?v=3OnMBtOyGkY
function SetupAudio() {
    console.log("setup")
    // If the mic is available, set up the device
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            "audio": true
        })
        .then(SetupStream)
        .catch(err => {
            console.error(err);
        });
    }
}


SetupAudio();



function SetupStream(stream) {

}



// Using p5.js for sound input https://www.youtube.com/watch?v=q2IDNkUws-A
// var mic;

// function setup() {
//     createCanvas(200, 200);
//     mic = new p5.AudioIn();
//     mic.start();
// }


// function grow() {
//     var volume = mic.getLevel();
//     background(0);
//     ellipse(100, 100, volume * 200, volume * 200);
//     console.log(volume);
// }












// // Using audio worklets
// navigator.mediaDevices.getUserMedia({
//     "audio": true
// })
// .then((stream) => {
//     // Define variables
//     const maxVolume = 30; // Define the maximum volume input from microphone
//     const audioContext = new AudioContext(); // Create an audio context variable
//     // const microphone = audioContext.createMediaStreamSource(stream); // Create a microphone audio node
//     // const analyser = audioContext.createAnalyser(); // Create an analyser
//     audioContext.audioWorklet.addModule("./audio-processor.js");
//     const audioNode = new AudioWorkletNode(audioContext, "./audio-processor.js");
//     const destination = audioContext.destination;
//     audioNode.connect(destination); // Connect the node to the destination
// })
// .catch(err => {
//     if (err.name === 'AbortError') {
//         console.log('AbortError: Fetch request aborted');
//       }
// })


// const audioInput = async () => {
//     // Define variables
//     const maxVolume = 30; // Define the maximum volume input from microphone
//     const audioContext = new AudioContext(); // Create an audio context variable
//     // const microphone = audioContext.createMediaStreamSource(stream); // Create a microphone audio node
//     // const analyser = audioContext.createAnalyser(); // Create an analyser
//     await audioContext.audioWorklet.addModule("audio-processor.js");
//     const audioNode = new AudioWorkletNode(audioContext, "audio-processor.js");
//     const destination = audioContext.destination;
//     audioNode.connect(destination); // Connect the node to the destination
// } 












// // TIKTOK
// navigator.mediaDevices.getUserMedia({
//     // Need to access audio only, no video
//     "audio": true
// }) 
// .then((stream) => {
//     // Define variables
//     const audioContext = new AudioContext(); // Create an audio context variable
//     const microphone = audioContext.createMediaStreamSource(stream); // Create a microphone audio node
//     const analyser = audioContext.createAnalyser(); // Create an analyser
//     const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 0); // TO FIX
//     const maxVolume = 30; // Define the maximum volume input from microphone
//     const destination = audioContext.destination;

//     // Attach the microphone and the analyser
//     microphone.connect(analyser);

//     // Attach the analyser and script processor
//     analyser.connect(scriptProcessor);

//     // Attach the script processor and destination
//     scriptProcessor.connect(destination);
    

//     // VIDEO CODE TIKTOK
//     scriptProcessor.addEventListener("audioprocess", () => {
//         const array = new Uint8Array(analyser.frequencyBinCount);
//         analyser.getByteFrequencyData(array);
//         var sum = 0;
//         for(var i = 0; i < array.length; i++) {
//             sum += array[i];
//         }
//         var average = sum / array.length;
//         // console.log(average);
//         if(average > maxVolume) {
//             // play();
//             // var restartButton = document.getElementById("restart");
//             // var balloon = document.getElementById("balloon");
//             // // balloon.setAttribute("hidden", true);
//             // balloon.style.display = 'none';
//             // restartButton.hidden = false;
//         }
//         // setTimeout(scriptProcessor, 10, []);
//     })


//     // if(microphone.mediaStream.active) {
//     //     console.log(microphone.mediaStream.active);
//     // }
    
// })

// .catch((err) => {
//     console.error(err);
// })