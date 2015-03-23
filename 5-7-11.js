jQuery(document).ready(function() {

if (Modernizr.geolocation) {
	console.log("existe geolocalizacion");
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

	navigator.geolocation.getCurrentPosition(showPosition);
	
} else {
	$('#coord').html("KEVIN ES UN PAQUETE, POR ESO NO TE RULA EL PROGRAMA");
	//polyfill
}

});

