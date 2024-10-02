let map = null
// Create Layer Controls
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

var Googlesat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
  attribution: 'Imagery © <a href="http://maps.google.com">Google</a>',
  maxZoom: 25,
  id: 'map' 
});

  map = L.map('map',{
  center: [-3.802034724295219, 39.83273911534205],
  zoom: 16,
  minZoom:1,
  maxZoom:20,
  layers: [Googlesat]
});

// define the basemaps
var basemaps = {
  "OpenStreetMap":osm,
  "DarkMatter":CartoDB_DarkMatter,
  "Google Satellite":Googlesat
};

// Add the layer control
var layerControl = L.control.layers(basemaps).addTo(map)


