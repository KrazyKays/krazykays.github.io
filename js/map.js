// Initialiser la carte
const map = L.map('map').setView([48.8566, 2.3522], 15); // Remplacez par vos coordonnées

// Ajouter les tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur à l'adresse
L.marker([48.8566, 2.3522]) // Remplacez par vos coordonnées
    .addTo(map)
    .bindPopup("Cabinet Florine GRISARD<br>12 Rue Exemple, 75000 Paris")
    .openPopup();
