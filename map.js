// Load the map
const map = L.map('map').setView([40.8, -96.7], 6); // Nebraska

// Add OpenStreetMap tiles
var CartoDB_DarkMatterNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

map.addLayer(CartoDB_DarkMatterNoLabels);

// Load data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.events.forEach(event => {
      const marker = L.marker(event.coords).addTo(map);
      marker.bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
      
      // When a marker is clicked, populate and show the sidebar
      marker.on('click', () => {
        // Fill the sidebar with event info
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-description').textContent = event.description;

        // Add any additional dynamic data as needed
        // Example: document.getElementById('event-date').textContent = event.date;

        // Show the sidebar by adding 'active' class
        document.getElementById('sidebar').classList.add('active');
      });
    });
  });



