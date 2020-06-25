import click from './game'

const button = document.getElementById('button');

button.addEventListener('click', function() {
  click();
});
