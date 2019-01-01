'use strict';

const selectFormValue = document.querySelectorAll('.form__value');
const buttonStart = document.querySelector('.btn');
const cardsList = document.querySelector('.list__cards');

let radioValue = '';
let pokemonArray = '';
let pokemonPairActive = '';

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
  pokemonArray +=`<li class="box opposite__image"><img class ="pokemon__image" src="${data.image}"></li>`;
}

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
  if( !e.currentTarget.classList.contains('active__pokemon') ){
    e.currentTarget.classList.add('active__pokemon');
  }else{
    e.currentTarget.classList.remove('active__pokemon');
  }
}

function pokemonListeners(){
  for(let i=0;i<cardsList.children.length;i++){
    cardsList.children[i].addEventListener('click',activePokemon);
  }
}


