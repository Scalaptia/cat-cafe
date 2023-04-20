export default function NavBar() {
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');

    const createTab = (tabName: string) => {
        const tab = document.createElement('li');
        tab.textContent = tabName
        tab.classList.add(`${tabName.toLowerCase()}-link`)

        return tab
    }

    ul.appendChild(createTab('Home'));
    ul.appendChild(createTab('Menu'));
    ul.appendChild(createTab('Contact'));
    navbar.appendChild(ul);

    return navbar;
}