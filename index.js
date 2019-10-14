'use strict';

function getDogImage(number) {
  // clear any existing images.
  $('.results-container').replaceWith(`<div class="results-container"></div>`)
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //append the number of images requested
  for (let source of responseJson.message) {
    $('.results-container').append(`<img src="${source}" class="results-img">`);
  }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs = $('input[name="quantity"]').val();
    getDogImage(numOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});