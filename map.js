// Load the map
const map = L.map('map').setView([40.8, -96.7], 6); // Nebraska

// Add OpenStreetMap tiles
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
  attribution: '&copy; Stamen Design'
}).addTo(map);

// Load data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.events.forEach(event => {
      const marker = L.marker(event.coords).addTo(map);
      marker.bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
    });
  });
