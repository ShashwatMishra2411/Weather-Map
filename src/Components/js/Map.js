import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../css/map.css';
import mark from '../marker.svg'

export default function Map(prop) {
  useEffect(() => {
    const mapContainer = L.map('map').setView([28.554623802313433, 77.08383168993971], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(mapContainer);
    const markIcon = L.icon({
        iconUrl: mark,
        iconSize: [32, 32], // Adjust the size as needed
        iconAnchor: [16, 32], // Adjust the anchor point if necessary
      });
    
    var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mapContainer);
    var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
    ]).addTo(mapContainer);
    function onMapClick(e) {
      console.log(e.latlng);
      prop.set(() =>{
        return [e.latlng.lat, e.latlng.lng]
      })
      var marker = L.marker([e.latlng.lat, e.latlng.lng], {icon:markIcon}).addTo(mapContainer)
    }

    mapContainer.on('click', onMapClick);

    return () => {
      // Clean up when the component unmounts
      mapContainer.off('click', onMapClick);
      mapContainer.remove();
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div id="map"></div>;
}
