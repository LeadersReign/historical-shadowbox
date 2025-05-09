// Load the map
const map = L.map('map').setView([40.8, -96.7], 6); // Nebraska

// Add OpenStreetMap tiles
var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
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
        document.getElementById('sidebar-title').innerText = event.title;
        document.getElementById('sidebar-description').innerText = event.description;
        document.getElementById('sidebar').classList.add('active');
      });
    });
  });

function closeSidebar() {
  document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
  });
}
