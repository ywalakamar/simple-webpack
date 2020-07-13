import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import data from './data.json'

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  const icon = new Image();
  icon.src = Icon;
  element.appendChild(icon);
  console.log(data)
  return element;
};

document.body.append(component());
