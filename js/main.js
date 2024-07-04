import {loadSection} from "./loader.js";

document.addEventListener('DOMContentLoaded', () => {
    loadSection('sections/header.html', 'header');
    loadSection('sections/hero.html', 'hero');
    loadSection('sections/about.html', 'about');
});