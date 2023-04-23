import '../style/navbar.css';
import pageLoad from './pageLoad';
import Home from './home';
import Menu from "./menu";
import Contact from "./contact";

const container = document.createElement('div');
container.classList.add('nav-container');

const createTab = (tabName: string, tabPage: any) => {
    const tab = document.createElement('li');
    tab.classList.add(`${tabName.toLowerCase()}-link`);
    tab.textContent = tabName;

    tab.addEventListener('click', () => {
        pageLoad(tabPage)
    })
    return tab;
}

export const NavBar = () => {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')
    const ul = document.createElement('ul');

    ul.appendChild(createTab('Home', Home()));
    ul.appendChild(createTab('Menu', Menu()));
    ul.appendChild(createTab('Contact', Contact()));
    navbar.appendChild(ul);

    container.appendChild(navbar);

    return container;
}

export const HamburgerNavbar = () => {
    const hamburgerMenu = document.createElement('button');
    hamburgerMenu.classList.add('hamburger-menu')
    
    const ul = document.createElement('ul');
    
    window.addEventListener('click', (e) => {
        if (ul.classList.contains('shown') ){
            ul.classList.toggle('shown');
        } else if (e.target === hamburgerMenu){
            ul.classList.toggle('shown');
        }
    })
    
    ul.appendChild(createTab('Home', Home()));
    ul.appendChild(createTab('Menu', Menu()));
    ul.appendChild(createTab('Contact', Contact()));
    
    container.appendChild(hamburgerMenu);
    container.appendChild(ul);

    return container;
}