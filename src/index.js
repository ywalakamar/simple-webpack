import _ from 'lodash';
import printMe from './print';

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = printMe.bind(null, 'Hello webpack!');

  return element;
};

document.body.append(component());
