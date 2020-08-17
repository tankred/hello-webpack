import _ from 'lodash'
import click from './game'
import './style.css'
import Icon from './2017-04-13-13-27-13-000100.png';
import Data from './data.xml';
import Laserjet from './assets/component/c-laserjet/index.js'

const button = document.getElementById('button');

button.addEventListener('click', function() {
  click();
});

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);
  return element;
}

document.body.appendChild(component());
