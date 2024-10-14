document.getElementById('hamburgerButton').addEventListener('click', function () {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active'); // Toggles visibility
});

// // Array of layer configurations
// const layers = [
//     {
//         id: 'toggleBMUs',
//         layer: BMULayer,
//         name: 'Coral Reefs'
//     },
//     {
//         id: 'toggleFishing',
//         layer: fishingGroundsLayer,
//         name: 'Protected Areas'
//     },
//     {
//         id: 'toggleLanding',
//         layer: landingSitesLayer,
//         name: 'Fishing Grounds'
//     }
    
//     // You can add more layer objects here as needed
// ];

// // Loop through each layer config to add event listeners dynamically
// layers.forEach(layerConfig => {
//     const toggle = document.getElementById(layerConfig.id);

//     // Add event listener for each toggle
//     toggle.addEventListener('change', function() {
//         if (this.checked) {
//             map.addLayer(layerConfig.layer); // Add the corresponding layer
//             console.log(layerConfig.name + ' layer added');
//         } else {
//             map.removeLayer(layerConfig.layer); // Remove the corresponding layer
//             console.log(layerConfig.name + ' layer removed');
//         }
//     });
// });


