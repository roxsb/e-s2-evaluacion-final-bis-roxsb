'use strict';

const selectFormValue = document.querySelectorAll('.form__value');
const buttonStart = document.querySelector('.btn');
const cardsList = document.querySelector('.list__cards');

let radioValue = '';
let pokemonArray = '';
let pokemonPairActive = '';

console.log(selectFormValue.value);

//Al hacer clic sobre el botón de 'Comenzar', recoge el valor del tamaño de la partida
function setRadio(e){
  for(let i = 0; i< selectFormValue.length; i++){
    selectFormValue[i].classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
  radioValue = event.currentTarget.value;
  //guardar este número en localStorage
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
//mostrar la parte de atrás siempre añadiendo la clase
function loadCards (data) {
  pokemonArray +=`<li class="box opposite__image"><img class ="pokemon__image" src="${data.image}"></li>`;
}
//conectar a una API que devuelve un listado de cartas donde NUMERO puede tomar el valor de 4, 6 y 8. obtendremosla URL de la imagen a mostrar
function getCards(){
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${radioValue}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      pokemonArray = '';
      for (let i=0;i<data.length;i++){
        loadCards(data[i]);
      }
      cardsList.innerHTML = pokemonArray;
      pokemonListeners();
    });
}

function activePokemon(e){
  //Al hacer clic sobre una carta vamos a mostrar su parte frontal y a ocultar su parte trasera viendo si tiene la clase active, si no, la añade, y si la tiene se la quita
  if( !e.currentTarget.classList.contains('active__pokemon') ){
    e.currentTarget.classList.add('active__pokemon');
  }else{
    e.currentTarget.classList.remove('active__pokemon');
  }
}

function pokemonListeners(){
  for(let i=0;i<cardsList.childNodes.length;i++){
    cardsList.childNodes[i].addEventListener('click',activePokemon);
  }
}


