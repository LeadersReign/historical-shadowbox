// Load the map
const map = L.map('map').setView([40.8, -96.7], 6); // Nebraska

// Add OpenStreetMap tiles
var Stadia_StamenTonerBackground = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

map.addLayer(Stadia_StamenTonerBackground);

// Load data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.events.forEach(event => {
      const marker = L.marker(event.coords).addTo(map);
      marker.bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
    });
  });
