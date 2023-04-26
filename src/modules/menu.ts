import '../style/menu.css';

function getImgUrl(fileName: string){
    const imgUrl = new URL(`../assets/menu-items/${fileName}.png`, import.meta.url).href
    return imgUrl
}

const createItem = (name:string, price:number, imageUrl: string) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

        const itemImage = document.createElement('img');
        itemImage.classList.add('item-image');
        itemImage.src = imageUrl
        itemContainer.appendChild(itemImage)

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
        warmMenu.appendChild(createItem('Espresso', 3.5, getImgUrl('espresso')));
        warmMenu.appendChild(createItem('Cappuccino', 4, getImgUrl('capuccino')));
        warmMenu.appendChild(createItem('Latte', 4, getImgUrl('latte')));
        warmMenu.appendChild(createItem('Americano', 3.75, getImgUrl('americano')));
        warmMenu.appendChild(createItem('Hot Tea', 2.5, getImgUrl('hot_tea')));
        warmMenu.appendChild(createItem('Chai Latte', 4, getImgUrl('chai_latte')));
        warmMenu.appendChild(createItem('Hot Chocolate', 4, getImgUrl('hot_chocolate')));
    container.appendChild(warmMenu);

    const coldMenuTitle = document.createElement('h3');
    coldMenuTitle.innerText = 'Cool Cat'
    container.appendChild(coldMenuTitle)

    const coldMenu = document.createElement('div');
    coldMenu.classList.add('cold-menu', 'menu');
        coldMenu.appendChild(createItem('Iced Tea', 3, getImgUrl('iced_tea')));
        coldMenu.appendChild(createItem('Iced Mocha', 5, getImgUrl('iced_mocha')));
        coldMenu.appendChild(createItem('Iced Chai', 4.5, getImgUrl('iced_chai')));
        coldMenu.appendChild(createItem('Mocha Frappe', 6.25, getImgUrl('mocha_frappe')));
        coldMenu.appendChild(createItem('Caramel Frappe', 6.25, getImgUrl('caramel_frappe')));
    container.appendChild(coldMenu);

    const foodMenuTitle = document.createElement('h3');
    foodMenuTitle.innerText = 'Food'
    container.appendChild(foodMenuTitle)

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('food-menu', 'menu');
        foodMenu.appendChild(createItem('Pastries', 3.5, getImgUrl('pastries')));
        foodMenu.appendChild(createItem('Sandwiches', 6, getImgUrl('sandwiches')));
        foodMenu.appendChild(createItem('Salads', 6, getImgUrl('salads')));
        foodMenu.appendChild(createItem('Snack Trays', 6, getImgUrl('snack_trays')));
    container.appendChild(foodMenu);

    return container;
}