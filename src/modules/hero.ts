import Logo from '../assets/logo.jpg';
import '../style/hero.css';

export default function Hero() {
    const hero = document.createElement('div');
    hero.classList.add('hero-container')

    const logoImage = new Image();
    logoImage.src = Logo
    logoImage.classList.add('logo')

    hero.appendChild(logoImage);
    
    return hero
}