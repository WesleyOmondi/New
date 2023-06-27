// Initialize the map
var map = L.map('map').setView([1.2921, 36.8219], 7);

// Create the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// Define an array of lakes in Kenya with their coordinates and information
var lakes = [
  {
    name: "Lake Victoria",
    coordinates: [-0.6892, 33.8048],
    info: "Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world."
  },
  {
    name: "Lake Turkana",
    coordinates: [3.4764, 36.0933],
    info: "Lake Turkana is the largest permanent desert lake in the world and the largest alkaline lake."
  },
  {
    name: "Lake Naivasha",
    coordinates: [-0.7709, 36.4323],
    info: "Lake Naivasha is a freshwater lake known for its picturesque scenery and diverse wildlife."
  },
  {
    name: "Lake Nakuru",
    coordinates: [-0.3031, 36.0800],
    info: "Lake Nakuru is a shallow, alkaline lake famous for its flamingo populations and wildlife sanctuary."
  },
  {
    name: "Lake Baringo",
    coordinates: [0.6683, 36.0514],
    info: "Lake Baringo is a freshwater lake known for its birdlife and as a hotspot for boat trips and fishing."
  },
  // Add more lakes here...
];

// Loop through the lakes array and add markers with custom popups
for (var i = 0; i < lakes.length; i++) {
  var lake = lakes[i];
  var marker = L.marker(lake.coordinates).addTo(map);
  marker.bindPopup("<b>" + lake.name + "</b><br>" + lake.info);
}
