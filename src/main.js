// import _ from 'lodash'
// import printMe from './print.js';

function component() {
// function getComponent() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and check the console!';
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  // btn.onclick = printMe;
  // element.appendChild(btn);
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     const print = module.default;

     print();
   });

  return element;
  //   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  //     const element = document.createElement('div');
  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //     return element;
  //   }).catch(error => 'An error occurred while loading the component');
  //   
}

// document.body.appendChild(component());
// getComponent().then(component => {
//   document.body.appendChild(component);
// })
document.body.appendChild(component());
