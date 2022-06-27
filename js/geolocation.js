const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `
    <p>Tu posicion actual es</p>
     <ul>
       <li>Latitud: <b>${coords.latitude}</b></li>
       <li><Longitud: <b>${coords.longitude}</b> </li>
       <li><Precision :<b>${coords.accuracy}</b></li> 
     </ul>
     <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},16z" target="_blank" rel="noopener ">Ver en Google Maps</a>
    `;
    n.geolocation.clearWatch(id);
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>$ Error ${err.code}: ${err.message}</mark></p>`;
    console.error(`Error ${err.code}: ${err.message}`);
  };
  id = n.geolocation.watchPosition(success, error, options);
}
