function parseData(jsonData) {
    try {
        // Parse the JSON data
        const data = JSON.parse(jsonData);

        // Update the DOM with the new data
        document.getElementById('temperature-value').textContent = data.temperature || 'N/A';
        document.getElementById('humidity-value').textContent = data.humidity || 'N/A';

    } catch (error) {
        console.error('Error parsing data:', error);
        document.getElementById('temperature-value').textContent = 'Error';
        document.getElementById('humidity-value').textContent = 'Error';
    }
}