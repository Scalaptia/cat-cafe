import Logo from '../assets/logo.jpg';
import '../style/hero.css';

export default function Hero() {
    const hero = document.createElement('div');
    hero.classList.add('hero-container')

    const heroLeft = document.createElement('div');
    heroLeft.classList.add('hero-left');

        const logoImage = new Image();
        logoImage.src = Logo;
        logoImage.classList.add('logo');
        heroLeft.appendChild(logoImage);

    const heroRight = document.createElement('div');
    heroRight.classList.add('hero-right');

        const heroTitle = document.createElement('h1');
        heroTitle.classList.add('hero-title');
        heroTitle.innerText = 'Welcome to Meow Café!'
        heroRight.appendChild(heroTitle)

        const heroText = document.createElement('h2');
        heroText.classList.add('hero-text');
        heroText.innerText = 'Escape to a world of purrs and relaxation at our cat cafe.';
        heroRight.appendChild(heroText);
    
        hero.appendChild(heroLeft);
        hero.appendChild(heroRight);

    return hero
}