let song; // p5.js Sound object
let analyzer; // p5.js Amplitude analyzer

function preload() {
    // Preload the song if you have a default song
}

let visualizationParams = { size: 100, color: [0, 0, 0] }; // Default values

function setup() {
    let canvas = createCanvas(800, 600); // Set the size of the visualization canvas
    canvas.parent('visualization'); // Attach the canvas to the 'visualization' div
    // Additional setup code...
}

function draw() {
    background(255); // Clear the canvas

    fill(visualizationParams.color[0], visualizationParams.color[1], visualizationParams.color[2]);
    noStroke();
    ellipse(width / 2, height / 2, visualizationParams.size, visualizationParams.size);
}

function getColorBasedOnMood(mood) {
    switch (mood) {
        case 'Happy': return [255, 204, 0];
        case 'Sad': return [0, 102, 204];
        // Add more cases for different moods
        default: return [0, 0, 0];
    }
}




