import * as _ from 'lodash';
//Assets
import './assets/uikit-3.0.2/css/uikit.min.css';
import './assets/uikit-3.0.2/css/uikit-rtl.min.css';
import './assets/uikit-3.0.2/js/uikit.min';
import './assets/uikit-3.0.2/js/uikit-icons.min';
import './assets/animate.min.css';
//Main Styles
import './sass/style.scss';
function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Welcome', 'To the starter'], ' ');
    return element;
}

document.body.appendChild(component());
