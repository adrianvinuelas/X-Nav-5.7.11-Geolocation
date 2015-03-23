jQuery(document).ready(function() {

	function showPosition(position) {
			var coordenadas = "Latitude: " + position.coords.latitude +
			"<br>Longitude: " + position.coords.longitude;
		
			var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13); //cargo el mapa

			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([position.coords.latitude,  position.coords.longitude]).addTo(map)
			    .bindPopup('LABORATORIO 3 <br> URJC')
			    .openPopup();

			$('#coord').html(coordenadas);
	}

	if (Modernizr.geolocation) {
		//navegador soporta geolocation, no hay problema
		navigator.geolocation.getCurrentPosition(showPosition);
	
	} else {
		/*actua polyfill porque el navegador no lo soporta y en geo.js al final
			if (!navigator.geolocation) {
			    navigator.geolocation = new GeolocationPolyfill();
			}
		por eso cuando el navegador no tiene geolocation, navigator.geolocation se iguala a 
		la funcion GeolocationPolifyll.
		*/
		navigator.geolocation.getCurrentPosition(showPosition);
		
	}

});

