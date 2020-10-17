// create map
var map = L.map("mapid").setView([-23.541596, -46.6324879], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos uploads
function addPhotoField() {

    // pegar container de fotos 
    const container = document.querySelector('#images')
    // pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('new-upload')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)


    // verificar se o campo esta vazio
    const input = newFieldContainer.children[0]

    if(input.value == "") {
      return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container
    container.appendChild(newFieldContainer)

}


function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = ""
    return
  }

  // deletar o campo
  span.parentNode.remove();

}

// selecao sim ou nao
function toggleSelect(event) {
  //retirar a classe active
  document.querySelectorAll('.button-select button')
  .forEach( button => button.classList.remove('active'))
  // colocar a classe .active
  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  // verificar se sim ou nao
  input.value = button.dataset.value
}

function validate(event) {
  preventDefault()
}