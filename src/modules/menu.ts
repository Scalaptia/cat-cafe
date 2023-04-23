import '../style/menu.css';

const createItem = (name:string, price:number) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

        const itemName = document.createElement('h3');
        itemName.classList.add('item-name');
        itemName.innerText = `${name}`;
        itemContainer.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.innerText = `$${price.toFixed(2)}`;
        itemContainer.appendChild(itemPrice);

    return itemContainer;
}

export default function Menu() {
    const container = document.createElement('div');
    container.classList.add('tab-container', 'menu-container');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.innerText = 'Menu'
    container.appendChild(menuTitle);
    
    const warmMenuTitle = document.createElement('h3');
    warmMenuTitle.innerText = 'Warm Kitty'
    container.appendChild(warmMenuTitle)

    const warmMenu = document.createElement('div');
    warmMenu.classList.add('warm-menu', 'menu');
        warmMenu.appendChild(createItem('Espresso', 3.5));
        warmMenu.appendChild(createItem('Cappuccino', 4));
        warmMenu.appendChild(createItem('Latte', 4));
        warmMenu.appendChild(createItem('Americano', 3.75));
        warmMenu.appendChild(createItem('Coffee', 3));
        warmMenu.appendChild(createItem('Hot Tea', 2.5));
        warmMenu.appendChild(createItem('Chai Latte', 4));
        warmMenu.appendChild(createItem('Hot Chocolate', 4));
    container.appendChild(warmMenu);

    const coldMenuTitle = document.createElement('h3');
    coldMenuTitle.innerText = 'Cool Cat'
    container.appendChild(coldMenuTitle)

    const coldMenu = document.createElement('div');
    coldMenu.classList.add('cold-menu', 'menu');
        coldMenu.appendChild(createItem('Iced Tea', 3));
        coldMenu.appendChild(createItem('Iced Mocha', 5));
        coldMenu.appendChild(createItem('Iced Chai', 4.5));
        coldMenu.appendChild(createItem('Iced Latte', 4.5));
        coldMenu.appendChild(createItem('Iced Coffee', 3.25));
        coldMenu.appendChild(createItem('Coffee Frappe', 5.75));
        coldMenu.appendChild(createItem('Mocha Frappe', 6.25));
        coldMenu.appendChild(createItem('Caramel Frappe', 6.25));
    container.appendChild(coldMenu);

    const foodMenuTitle = document.createElement('h3');
    foodMenuTitle.innerText = 'Food'
    container.appendChild(foodMenuTitle)

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('food-menu', 'menu');
        foodMenu.appendChild(createItem('Pastries', 3.5));
        foodMenu.appendChild(createItem('Sandwiches', 6));
        foodMenu.appendChild(createItem('Salads', 6));
        foodMenu.appendChild(createItem('Snack Trays', 6));
    container.appendChild(foodMenu);

    return container;
}