//import Home from "./modules/home";
import Menu from "./modules/menu";
//import Contact from "./modules/contact";
import { NavBar } from './modules/navbar';
import { HamburgerNavbar } from './modules/navbar';

const content = document.getElementById('content');
content!.appendChild(NavBar())
content!.appendChild(HamburgerNavbar()) 
content!.appendChild(Menu()) // Default Tab