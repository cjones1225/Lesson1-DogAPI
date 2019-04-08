'use strict';

function getDogImage() {
    var x = document.getElementById("imageCount").value;
    var url = "https://dog.ceo/api/breeds/image/random/" + x;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      renderResults(responseJson))
      .catch(error => alert('Error '+ error + ' Something went wrong. Try again later.'));
    
}

function displayResults(responseJson) {
    var results = responseJson.message;
    let returnString = '';
    debugger;
    results.forEach((url) => {
      returnString = returnString + `<img src="${url}" class="results-img">`;
    });
    return returnString;
}

function renderResults (responseJson) {
  const imagesHtmlString = displayResults(responseJson);
  $('.results').html(imagesHtmlString);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});