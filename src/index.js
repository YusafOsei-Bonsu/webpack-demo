import _ from 'lodash';
import './style.css';
import Icon from './images/icon.png';
import Data from './data/data.xml';
import Notes from './data/data.csv';

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

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());