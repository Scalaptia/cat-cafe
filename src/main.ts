import { NavBar } from './modules/navbar';
import { HamburgerNavbar } from './modules/navbar';
import Home from "./modules/home";
import Footer from './modules/footer';

const content = document.getElementById('content');

content!.appendChild(NavBar());
content!.appendChild(HamburgerNavbar()); 
content!.appendChild(Home()); // Default Tab
content!.appendChild(Footer());