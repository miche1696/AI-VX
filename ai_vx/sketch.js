let song; // p5.js Sound object
let analyzer; // p5.js Amplitude analyzer

function preload() {
    // Preload the song if you have a default song
}

let visualizationParams = {};

function setup() {
    createCanvas(800, 600); // Set the size of the visualization canvas
    // Any additional setup can be done here
}

function draw() {
    background(255); // Clear the canvas with a white background

    // Default values if visualizationParams is not set
    let size = 100;
    let color = [0, 0, 0]; // Black color

    // Adjust size based on tempo
    if (visualizationParams.tempo) {
        size = map(visualizationParams.tempo, 60, 180, 50, 300); // Example mapping
    }

    // Change color based on mood
    switch (visualizationParams.mood) {
        case 'Happy':
            color = [255, 204, 0]; // Yellow
            break;
        case 'Sad':
            color = [0, 102, 204]; // Blue
            break;
        case 'Energetic':
            color = [255, 0, 0]; // Red
            break;
        case 'Calm':
            color = [0, 255, 127]; // Green
            break;
        default:
            color = [0, 0, 0]; // Default to black
    }

    fill(color[0], color[1], color[2]);
    noStroke();
    ellipse(width / 2, height / 2, size, size);
}



