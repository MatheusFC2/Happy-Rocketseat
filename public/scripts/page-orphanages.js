// tipos de dados
// String
// Number 01
// Object {}
// Boolean true or false
// Array []


//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16)

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)


// creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconsize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

//create popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent ('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')



L
.marker([-27.222633, -49.6455874], {icon})
.addTo(map)
.bindPopup(popup)
