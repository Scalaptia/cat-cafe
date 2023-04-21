import '../style/navbar.css';

const container = document.createElement('div');
container.classList.add('nav-container');

const createTab = (tabName: string) => {
    const tab = document.createElement('li');
    tab.textContent = tabName;
    tab.classList.add(`${tabName.toLowerCase()}-link`);

    return tab;
}

export const NavBar = () => {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')
    const ul = document.createElement('ul');

    ul.appendChild(createTab('Home'));
    ul.appendChild(createTab('Menu'));
    ul.appendChild(createTab('Contact'));
    navbar.appendChild(ul);
    container.appendChild(navbar);

    return container;
}

export const HamburgerNavbar = () => {
    const hamburgerMenu = document.createElement('button');
    hamburgerMenu.classList.add('hamburger-menu')
    const ul = document.createElement('ul');
    
    ul.appendChild(createTab('Home'));
    ul.appendChild(createTab('Menu'));
    ul.appendChild(createTab('Contact'));
    hamburgerMenu.appendChild(ul);
    
    hamburgerMenu.onclick = () => {
        ul.classList.toggle('shown');
    }

    container.appendChild(hamburgerMenu);
    return container;
}