class AudioProcessor extends AudioWorkletProcessor {
    // Default constructor call the super
    constructor() {
        super();
    }

    process(inputs, outputs, parameters) {
        return true;
    }
}

console.log(sampleRate);

const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor('audio-processor', AudioProcessor);