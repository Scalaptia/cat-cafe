import '../style.css';
import '../style/navbar.css';
import NavBar from './navbar';
import Hero from './hero';

export default function pageLoad() {
    const content: HTMLElement | null = document.getElementById('content');
    
    if (content !== null) {
        content.appendChild(NavBar());
        content.appendChild(Hero());
    }
}

