import printMe from './print';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click Me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
};

document.body.append(component());
