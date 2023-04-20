import '../style.css';
import '../style/navbar.css';
import NavBar from './navbar';
import Hero from './hero';

export default function pageLoad() {
    const content = document.querySelector('#content');
    
    content.appendChild(NavBar());
    content.appendChild(Hero());
}

