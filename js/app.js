// Array de imágenes
var images = [
    'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8062289/pexels-photo-8062289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

//Imagen aleatoria
$(document).ready(function(){
    var img;
    var cont = $('.login-image');

    j = Math.floor( Math.random() * images.length);
    console.log(j)
    img = $('<img />', { src : images[j] });
    cont.append(img);
});

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.innerText = "Todos los campos son requeridos.";
        errorMessage.style.display = "block";
        return false;
    }

    if (password.length < 8) {
        errorMessage.innerText = "La contraseña debe tener al menos 8 caracteres.";
        errorMessage.style.display = "block";
        return false;
    }

    errorMessage.style.display = "none";
    return true;
};


// Google Maps
let map;

async function initMap() {
   // Localización
   const position = { lat: 4.67, lng: -74.05 };
   // Librerias
   const { Map } = await google.maps.importLibrary("maps");
   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

   // Mapa
   map = new Map(document.getElementById("map"), {
     zoom: 18,
     center: position,
     mapId: "DEMO_MAP_ID",
   });

   // Marcador
   const marker = new AdvancedMarkerElement({
     map: map,
     position: position,
     title: "Uluru",
   });
}

initMap();