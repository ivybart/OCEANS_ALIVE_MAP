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
  zoom: 13,
  minZoom:1,
  maxZoom:20,
  layers: [osm]
});

// define the basemaps
var basemaps = {
  "OpenStreetMap":osm,
  "DarkMatter":CartoDB_DarkMatter,
  "Google Satellite":Googlesat
};

// Add the layer control
var layerControl = L.control.layers(basemaps).addTo(map)

// ================================== Add Map Layers =======================================

// Function to fetch and display the GeoJSON layer based on the slider state
function loadGeoJsonLayer(url) {
  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Create a GeoJSON layer with uniform styling for points
          const geojsonLayer = L.geoJSON(data, {
              
              // Use pointToLayer to customize all point features uniformly
              pointToLayer: function(feature, latlng) {
                  // Define uniform styling options for all points
                  const markerOptions = {
                      radius: 8,            
                      fillColor: "#0077B6", 
                      color: "#000",        
                      weight: 1,            
                      opacity: 1,           
                      fillOpacity: 1      
                  };

                  // Return a CircleMarker with the specified options
                  return L.circleMarker(latlng, markerOptions);
              },
              onEachFeature: function(feature, layer) {
                  // Bind popups to point features
                  layer.bindPopup(feature.properties.Name || 'Feature');
              }
          });

          const toggle = document.getElementById('toggleBMUs');

          toggle.addEventListener('change', function() {
              if (this.checked) {
                  geojsonLayer.addTo(map);            
                  map.fitBounds(geojsonLayer.getBounds()); 
              } else {
                  map.removeLayer(geojsonLayer);     
              }
          });
      })
      .catch(error => {
          console.error('Error loading GeoJSON:', error);
      });
}

// Load file
loadGeoJsonLayer('Assets/BMU.geojson');

  // ==================================== Landing Sites =====================================
  function loadLandingLayer(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a GeoJSON layer with uniform styling for points
            const landingLayer = L.geoJSON(data, {
                
                // Use pointToLayer to customize all point features uniformly
                pointToLayer: function(feature, latlng) {
                    // Define uniform styling options for all points
                    const markerOptions = {
                        radius: 8,            
                        fillColor: "#90E0EF", 
                        color: "#000",        
                        weight: 1,            
                        opacity: 1,           
                        fillOpacity: 1      
                    };
  
                    // Return a CircleMarker with the specified options
                    return L.circleMarker(latlng, markerOptions);
                },
                onEachFeature: function(feature, layer) {
                    // Bind popups to point features
                    layer.bindPopup(feature.properties.Name || 'Feature');
                }
            });
  
            const toggle = document.getElementById('toggleLanding');
  
            toggle.addEventListener('change', function() {
                if (this.checked) {
                    landingLayer.addTo(map);            
                    map.fitBounds(landingLayer.getBounds()); 
                } else {
                    map.removeLayer(landingLayer);     
                }
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
  }

// Load file
loadLandingLayer('Assets/landing sites.geojson');

// ===================== Load Coral Restoration ===================
function loadRestorationLayer(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a GeoJSON layer with uniform styling for points
            const restorationLayer = L.geoJSON(data, {
                
                // Use pointToLayer to customize all point features uniformly
                pointToLayer: function(feature, latlng) {
                    // Define uniform styling options for all points
                    const markerOptions = {
                        radius: 8,            
                        fillColor: "#00B4D8", 
                        color: "#000",        
                        weight: 1,            
                        opacity: 1,           
                        fillOpacity: 1      
                    };
  
                    // Return a CircleMarker with the specified options
                    return L.circleMarker(latlng, markerOptions);
                },
                onEachFeature: function(feature, layer) {
                    // Bind popups to point features
                    layer.bindPopup(feature.properties.Name || 'Feature');
                }
            });
  
            const toggle = document.getElementById('toggleRestoration');
  
            toggle.addEventListener('change', function() {
                if (this.checked) {
                restorationLayer.addTo(map);            
                    map.fitBounds(restorationLayer.getBounds()); 
                } else {
                    map.removeLayer(restorationLayer);     
                }
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
  }

// Load file
loadRestorationLayer('Assets/coral-restoration.geojson');

////////////////// Load Fishing Grounds ////////////////////////
var myStyle = {
    "color": "#2EC4B6",
    "weight": 1,
    "fillColor":"#00B4D8",
    "fillOpacity":1,
    
};

function loadFishingLayer(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a GeoJSON layer with uniform styling for points
            const fishLayer = L.geoJSON(data, {
                // customize all point features uniformly
                style:myStyle,
               
                onEachFeature: function(feature, layer) {
                    // Bind popups to point features
                    layer.bindPopup(feature.properties.Name || 'Feature');
                }
            });
  
            const toggle = document.getElementById('toggleFishing');
  
            toggle.addEventListener('change', function() {
                if (this.checked) {
                    fishLayer.addTo(map);            
                    map.fitBounds(fishLayer.getBounds()); 
                } else {
                    map.removeLayer(fishLayer);     
                }
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
  }
  
  // Load file
  loadFishingLayer('Assets/fishing ground.geojson');

 // ===================== Load Permaculture ===================
function loadPermacultureLayer(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a GeoJSON layer with uniform styling for points
            const permacultureLayer = L.geoJSON(data, {
                
                // Use pointToLayer to customize all point features uniformly
                pointToLayer: function(feature, latlng) {
                    // Define uniform styling options for all points
                    const markerOptions = {
                        radius: 8,            
                        fillColor: "#457B9D", 
                        color: "#000",        
                        weight: 1,            
                        opacity: 1,           
                        fillOpacity: 1      
                    };
  
                    // Return a CircleMarker with the specified options
                    return L.circleMarker(latlng, markerOptions);
                },
                onEachFeature: function(feature, layer) {
                    // Bind popups to point features
                    layer.bindPopup(feature.properties.Name || 'Feature');
                }
            });
  
            const toggle = document.getElementById('togglePermaculture');
  
            toggle.addEventListener('change', function() {
                if (this.checked) {
                permacultureLayer.addTo(map);            
                    map.fitBounds(permacultureLayer.getBounds()); 
                } else {
                    map.removeLayer(permacultureLayer);     
                }
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
  }

// Load file
loadPermacultureLayer('Assets/permaculture.geojson');