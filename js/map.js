// Initialiser la carte
const map = L.map('map').setView([48.12288782539148, -1.6115285333489013], 15); // Remplacez par vos coordonnées

// Ajouter les tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur à l'adresse
L.marker([48.12288782539148, -1.6115285333489013]) // Remplacez par vos coordonnées
    .addTo(map)
    .bindPopup("Cabinet Florine GRISARD<br>6 Rue de la Mare Pavée, 35510 Cesson-Sévigné")
    .openPopup();
