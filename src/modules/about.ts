import '../style/about.css';
import coffeeSVG from '../assets/coffee-cup.svg';

const createSection = (content: string) => {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerText = content;

    return section
}

export default function About() {
    const container = document.createElement('div');
    container.classList.add('tab-container', 'contact-container');
    
    const about = document.createElement('p');
    about.classList.add('about')
    about.appendChild(createSection('Welcome to our cat cafe, a cozy and inviting space where you can relax and unwind with our furry feline friends. Our cafe is dedicated to creating a unique and unforgettable experience for cat lovers and coffee enthusiasts alike.'))
    about.appendChild(createSection('Our cats come from local shelters and are given a loving home in our cafe where they can roam freely and interact with our customers. Not only do we provide a comfortable space for our cats to play and nap, but we also work to find them forever homes through our adoption program.'));
    about.appendChild(createSection('We believe in creating a welcoming atmosphere for all, so whether you’re here to cuddle with our cats or enjoy a cup of coffee, we have something for everyone. Our cafe offers a variety of drinks and snacks, including vegan and gluten-free options, and we strive to use locally sourced and sustainable ingredients whenever possible.'));
    about.appendChild(createSection('We also offer special events and activities, such as yoga with cats, movie nights, and game nights, to make your visit even more enjoyable. So come on in, grab a cup of coffee, and make some furry friends at our cat cafe!'));
    container.appendChild(about);

    const reservationBtn = document.createElement('button');
    reservationBtn.classList.add('reservation-btn');
    reservationBtn.innerHTML = `<img src='${coffeeSVG}'>` + 'Make a Reservation';
    container.appendChild(reservationBtn);

    const contact = document.createElement('div');
    contact.classList.add('contact')
    contact.innerHTML = ''
    container.appendChild(contact)
    


    return container
}