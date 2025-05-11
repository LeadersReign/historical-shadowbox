// Load the map
const map = L.map('map').setView([40.8, -96.7], 6); // Nebraska

// Add OpenStreetMap tiles
var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
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
    });
  });

function openSidebar(contentHTML) {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('sidebar-content');
  content.innerHTML = contentHTML;
  sidebar.classList.add('visible');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('visible');
}

// Example marker that opens the sidebar
var marker = L.marker([48.8566, 2.3522]).addTo(map); // Paris

marker.on('click', () => {
  openSidebar(`
    <h2>Battle of Paris</h2>
    <img src="https://via.placeholder.com/250x150" alt="Paris" style="width:100%;">
    <p>This was a major event in the liberation of France during WWII.</p>
    <a href="https://en.wikipedia.org/wiki/Liberation_of_Paris" target="_blank">Learn more</a>
  `);
});
