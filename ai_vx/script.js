document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('songInput');
    if(fileInput.files.length === 0) {
        alert("Please select a song file.");
        return;
    }

    const file = fileInput.files[0];
    uploadSong(file);
});

let visualizationParams = {};

function uploadSong(file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload_song', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Song analysis data:", data);
        if (data.tempo && data.mood) {
            // Call a function to handle the visualization based on the received data
            // Example: visualizeSong(data);
        } else {
            console.error('Invalid response from the server');
        }
    })
    .catch(error => console.error('Error uploading song:', error));
}


function requestVisuals(analysisData) {
    fetch('/get_visuals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(analysisData)
    })
    .then(response => response.json())
    .then(visualsData => {
        visualizeSong(visualsData);
    })
    .catch(error => console.error('Error requesting visuals:', error));
}

function visualizeSong(visualsData) {
    // Update the visualization parameters based on the received data
    visualizationParams = {
        tempo: visualsData.tempo,
        mood: visualsData.mood
    };
}
// Additional functions can be added for more interactivity and features
