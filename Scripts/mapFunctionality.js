

// Exemplu: adăugarea unei stații (ex: Hale Catedrală)
// [Latitudine, Longitudine], opțiuni vizuale
//====≈============== dot on map gen ==

// L.circleMarker([44.9405, 26.0264], {
//     radius: 7,          // Dimensiunea cercului (raza în pixeli)
//     fillColor: "var(--btnlink-bg)", // Culoarea din interior (ex: roșu)
//     color: "#ffffff",     // Culoarea bordurii (ex: alb)
//     weight: 2,          // Grosimea bordurii în pixeli
//     opacity: 1,         // Opacitatea bordurii
//     fillOpacity: 0.9    // Opacitatea umplerii
// }).addTo(map).bindPopup("<b>Stația: Hale Catedrală</b><br>Trasee: 4B, 22, 39");

// =========



const map = L.map('map', {maxZoom: 23}).setView([44.9405, 26.0264], 12);
let currentTileLayer = null;
resetMapTheme()

function resetMapTheme () {
  if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }
  let styleLINK = localStorage.getItem('theme') === 'dark'
    ? 'https://tiles.openfreemap.org/styles/dark'
    : 'https://tiles.openfreemap.org/styles/positron';
    // ? 'https://tiles.openfreemap.org/styles/fiord'
  
  currentTileLayer = L.maplibreGL({
    style: styleLINK,
    attribution: '&copy; <a href="https://openfreemap.org">OpenFreeMap</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }).addTo(map);  
  
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
}

const markersCluster = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    const count = cluster.getChildCount();
    let size = 40; // dimensiunea în pixeli
    return L.divIcon({
      html: `<div style="
        background-color: var(--map-fill-cluster); 
        color: var(--font); 
        border: 1px solid var(--map-border); 
        width: 100%; 
        height: 100%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        border-radius: 50%; 
        font-weight: bold;
        box-shadow: 0 2px 10px var(--card-boxshadow);
        backdrop-filter: blur(10px);
      "><span>${count}</span></div>`,
      className: 'custom-cluster',
      iconSize: L.point(size, size)
    });
  }
});

fetch('./JSON/trasee.json')
  .then(response => response.json())
  .then(data => {
    data.IDs.forEach(i => {
      if (!i.coord) return;
      const ruteInStatie = searchForTrasee(i.stopId, data);
      const listaTraseeStr = [...new Set(ruteInStatie.map(r => r.NrTraseu))].join(', ');
      const latlong = i.coord.split(',').map(c => parseFloat(c.trim()));
      const stopCircle = L.circleMarker(latlong, {
        radius: 9,          // Dimensiunea cercului (raza în pixeli)
        fillColor: "var(--map-fill)", // Culoarea din interior (ex: roșu)
        color: "var(--map-border-small)",     // Culoarea bordurii (ex: alb)
        weight: 1,          // Grosimea bordurii în pixeli
        opacity: 1,         // Opacitatea bordurii
        fillOpacity: 0.85,    // Opacitatea umplerii
        className: 'map_circle_small'
      })// .addTo(map)
        .bindPopup(`<b>${i.nume}</b><br>Trasee: ${listaTraseeStr || 'Niciun traseu'}<br> <a href="./statie.html#${i.stopId}">Vezi plecari din statie</a>`);
      markersCluster.addLayer(stopCircle);
    });
    map.addLayer(markersCluster);
  })

function searchForTrasee(ReqStopID, data) {
      const results = [];
      Object.keys(data).forEach(trKey => {
        const traseu = data[trKey];
        if (!traseu || typeof traseu !== 'object' || !Array.isArray(traseu.Variante) && !traseu.StatiiTur && !traseu.StatiiRetur) {
          // console.log(trKey);
          return;
        }
        // console.log('numar', trKey);
        if (traseu.StatiiTur && Array.isArray(traseu.StatiiTur)) {
          const StatieIndex = traseu.StatiiTur.findIndex(s => s.stopId === ReqStopID);
          if (StatieIndex !== -1) {
            results.push({
              NrTraseu: trKey
            });
          }
        }
        if (traseu.StatiiRetur && Array.isArray(traseu.StatiiRetur)) {
          const StatieIndex = traseu.StatiiRetur.findIndex(s => s.stopId === ReqStopID);
          if (StatieIndex !== -1) {
            results.push({
              NrTraseu: trKey
            });
          }
        }
      });
      return results;
}