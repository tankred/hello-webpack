import _ from 'lodash'
import printMe from './print.js';

// function component() {
function getComponent() {
 // const element = document.createElement('div');
  // const btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);

  // return element;
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
  
}

// document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})
