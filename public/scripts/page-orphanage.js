// tipos de dados
// String
// Number 01
// Object {}
// Boolean true or false
// Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 16)

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)


// creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconsize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

L
.marker([-27.222633, -49.6455874], {icon})
.addTo(map)

/* image galery */

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button) {
        button.classList.remove("active")
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContent = document.querySelector(".orphanage-details > img")

    //atualizar o container de images
    imageContent.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active');
}