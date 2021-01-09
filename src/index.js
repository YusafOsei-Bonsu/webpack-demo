import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    // Turning "Hello webpack" red after loading css
    element.classList.add('hello');

    // Add the image to our existing div
    const wolfIcon = new Image();
    wolfIcon.src = Icon;
    element.appendChild(wolfIcon);

    return element;
}

document.body.appendChild(component());