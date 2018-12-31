'use strict';

const selectFormValue = document.querySelectorAll('.form__value');
const buttonStart = document.querySelector('.btn');
const cardsList = document.querySelector('.list__cards');
const oppositeImg = 'assets/images/opuesta.png';

let radioValue = '';
let pokemonArray = [];

console.log(selectFormValue.value);

//Al hacer clic sobre el botón de 'Comenzar', recoge el valor del tamaño de la partida
function setRadio(e){
  for(let i = 0; i< selectFormValue.length; i++){
    selectFormValue[i].classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
  radioValue = event.currentTarget.value;
  localStorage.setItem('number',JSON.stringify(radioValue))
}
function getRadio () {
}
function clickListener(){
  for(let i=0; i<selectFormValue.length;i++){
    selectFormValue[i].addEventListener('click',setRadio);
  }
}
buttonStart.addEventListener('click',getCards);
clickListener();

function loadCards (data) {
  pokemonArray.push(`<li><img src="${data.image}"></li>`);
}

function getCards(){
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${radioValue}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      pokemonArray = [];
      for (let i=0;i<data.length;i++){
        loadCards(data[i]);
      }
      cardsList.innerHTML = pokemonArray;
    });
}

//recoge el valor sin necesidad del listener de comenzar
// function getRadioValue(event){
//   radioValue = event.currentTarget.value;
//   console.log(radioValue);
//   localStorage.setItem('number',JSON.stringify(radioValue));
// }

// function initPage () {clickListener();buttonStart.addEventListener('click',getRadio)}
// initPage()



//conectar a una API que devuelve un listado de cartas donde NUMERO puede tomar el valor de 4, 6 y 8. obtendremosla URL de la imagen a mostrar

//guardar este número en localStorage


//hacer que el listado sea interactivo
//Ocultar la parte frontal de las cartas mostrando solo la parte de atrás

//Al hacer clic sobre una carta vamos a mostrar su parte frontal y a ocultar su parte trasera

//Al volver a hacer clic haremos la operación contraria, y volveremos a ver su parte trasera y ocultar la frontal

//implementar el juego
//Cuando se hace clic en una primera carta esta se da la vuelta y nos muestra su pokemon, Al hacer clic en una segunda carta esta se da la vuelta y: si es la pareja de la primera las dos se quedan boca arriba, si no es la pareja de la primera las dos deben mantenerse visibles durante un periodo corto de tiempo y ponerse boca abajo.







//cosas a medias MAL


