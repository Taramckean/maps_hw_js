const MapWrapper = function(container, coords, zoom){

    const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  }

// MapWrapper.prototype.moveMap = function (coords, id) {
//   document.getElementById(id).addEventListener('click', function() {
//         this.map.flyTo(coords, 15);
//       }.bind(this));
// };

MapWrapper.prototype.moveMap = function (coords, id) {
  document.getElementById(id).addEventListener('click',
  () => this.map.flyTo(coords, 15));
L.marker(coords).addTo(this.map).bindPopup(`My coordinates are ${coords}`);
};
MapWrapper.prototype.addMarker = function (markerCoords) {
    L.marker(markerCoords).addTo(this.map);
};
