import '../style/style.css';
import { NavBar } from './navbar';
import { HamburgerNavbar } from './navbar';
import Hero from './hero';

export default function pageLoad() {
    const content: HTMLElement | null = document.getElementById('content');
    
    if (content !== null) {
        content.appendChild(NavBar());
        content.appendChild(HamburgerNavbar());
        content.appendChild(Hero());
    }
}

