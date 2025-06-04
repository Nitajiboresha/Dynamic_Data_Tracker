// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    function fetchData() {
        fetch('http://localhost:3035/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                parseData(JSON.stringify(data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('temperature-value').textContent = 'Failed to load data';
                document.getElementById('humidity-value').textContent = 'Failed to load data';
            });
    }

    fetchData();
    setInterval(fetchData, 60000);
});