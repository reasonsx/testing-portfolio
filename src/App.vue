<script setup>
import { RouterLink, RouterView } from 'vue-router'


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        let currentSectionId = '';

        // Determine the current section
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // Check if the section is at the top third of the viewport
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update the navigation links
        navLinks.forEach((link) => {
            link.classList.remove('active'); // Remove active class from all links
            const linkTarget = link.getAttribute('href').substring(1); // Get the section ID linked to the nav item
            if (linkTarget === currentSectionId) {
                link.classList.add('active'); // Set active class on the link of the current section
            }
        });
    });
});
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <RouterView />
    <footer>
        <div class="footer_container">
            <p>©2024 KAMIL KREGIEL ALL RIGHTS RESERVED</p>
        </div>
    </footer>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


:root {
    --main-font: 'Poppins', sans-serif;
    --black-color: #050505;
    --white-color: #efefef;
    --gray-color: #313131;
    --main-color: #1B2B1C;
    --secondary-color: #DEFE10;
    --tertiary-color: #440dba;
    --main-border-radius: 32px;
    --font-weight: 700;
    --default-font-size: 32px;
}

body, html {
    background-color: var(--main-color);
    font-family: var(--main-font);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h2 { 
    font-size: 96px;
    color: var(--secondary-color);
    margin: 0;
    height: 140px;
    @media screen and (max-width: 768px) {
        font-size: 80px;
        height: 112px;
        
    }
}
header {
    width: auto;
    height: auto;
    justify-content: center;
    display: flex;
}

nav {
    display: flex;
    position: fixed;
    height: 64px;
    width: 572px;
    margin-top: 32px;
    justify-content: space-evenly;
    background-color: rgba(5, 5, 5, 0.70);
    border-radius: 1rem;
    align-items: center;
    z-index: 10;
    @media screen and (max-width: 768px) {
        width: 376px;
        margin-top: 16px;
    }
}

ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    width: 100%;
    justify-content: space-evenly;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    border-radius: 16px;
}

li:hover {
    /* background-color: rgba(239, 239, 239, 0.80); */
    transition: all 0.4s ease;
}

li:not(:hover) {
    transition: all 0.4s ease-out;
}

a {
    display: flex;
    width: 100%;
    height: 100%;
    color: var(--white-color);
    font-weight: 500;
    text-decoration: none;
    align-items: center;
    justify-content: center;
}
a:hover {
    scale: 1.05;
    transition: all 0.2s ease;
}
a:not(:hover) {
    scale: 1.0;
    transition: all 0.2s ease-out;
}
a.active {
    background-color: var(--white-color);
    color: var(--black-color);
    border-radius: 16px;
    transition: all 0.5s ease;
}


.svg_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 128px;
}
.projects_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 614px;
    width: 1352px;
    margin-bottom: 56px;
    @media screen and (max-width: 768px) {
        width: 376px;
        height: auto;
        
    }
}

.projects_background {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 1160px;
    height: auto;
    @media screen and (max-width: 768px){
        width: 376px;
        height: auto;
        
    }
}

.projects_container {
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    gap: 16px;
    -ms-overflow-style: none;  /* Edge */
    scrollbar-width: none;  /* Firefox */
}
.projects_container::-webkit-scrollbar {
    display: none;
}
.project_box {
    width: 376px;
    height: 474px;
    background-color: rgba(5, 5, 5, 0.70);
    border-radius: 48px;
    scroll-snap-align: start;
    flex: 0 0 376px;
@media screen and (max-width: 768px) {
    width: 248px;
    height: 312px;
    flex: 0 0 248px;
    border-radius: 32px;
}
}
.project_box_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 100%;
    /* filter: grayscale(100%); */
    @media screen and (max-width: 768px) {
        height: 100%;
    }

}
.view_button {
    width: 180px;
    height: 64px;
    background-color: var(--tertiary-color);
    border-radius: 32px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    /* opacity: 0; */
    cursor: pointer;
    @media screen and (max-width: 768px) {
        width: 116px;
        height: 64px;
        border-radius: 24px;
    }
    p {
        color: var(--white-color);
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        font-family: var(--main-font);
    }
}
.view_button:hover {
    scale: 1.05;
    transition: all 0.3s ease;
}
.view_button:not(:hover) {
    scale: 1.0;
    transition: all 0.3s ease-out;
}
.project_box img {
    width: 344px;
    height: 362px;
    object-fit: cover;
    border-radius: 32px;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
        border-radius: 32px;
        width: 216px;
        height: 200px;
    }
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1192px;
    height: 730px;
    border-radius: 48px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    transition: all 0.3s ease;
    /* padding: 16px; */
    @media screen and (max-width: 768px){
        width: auto;
        height: 376px;
        border-radius: 32px;
        
    }
}

.popup_container {
    /* background-color: white; */
    display: grid;
    margin-left: 16px;
    margin-top: 16px;
    grid-template-columns: 376px 376px 376px;
    grid-template-rows: 474px 128px;
    grid-gap: 16px;
    align-self: center;
    @media screen and (max-width: 768px) {
        grid-template-columns: 376px;
        grid-template-rows: 376px 376px;
        grid-gap: 0;
    }
}
.popup_box_1 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: var(--secondary-color);
    border-radius: 48px;
    @media screen and (max-width: 768px) {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}
.popup_box_2 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: var(--secondary-color);
    border-radius: 48px;
    @media screen and (max-width: 768px) {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}
.popup_box_3 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 4;
    background-color: var(--secondary-color);
    border-radius: 48px;
    @media screen and (max-width: 768px) {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}
.popup_box_4 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    background-color: var(--secondary-color);
    border-radius: 48px;
    @media screen and (max-width: 768px) {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 1;
    }
}
.popup_box_5 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
    background-color: var(--secondary-color);
    border-radius: 48px;
    @media screen and (max-width: 768px) {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 3;
    }
}
.close_button {
    position: absolute;
    width: 180px;
    height: 64px;
    bottom: 16px;
    left: 506px;
    background-color: var(--tertiary-color);
    border-radius: 32px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.close_button p {
    color: var(--white-color);
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        font-family: var(--main-font);
}
.close_button:hover {
    scale: 1.05;
    transition: all 0.3s ease;
}
.close_button:not(:hover) {
    scale: 1.0;
    transition: all 0.3s ease-out;
}

.about_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 754px;
    width: 1352px;
    margin-bottom: 128px;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
}

.about_container {
    display: grid;
    grid-template-columns: 572px 572px;
    grid-template-rows: 572px;
    grid-gap: 16px;
    align-self: center;
    @media screen and (max-width: 768px){
        grid-template-columns: 376px;
        grid-template-rows: 376px 376px;
        grid-gap: 0;
    }
}

.about_background {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.left_about_box {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: var(--secondary-color);
    border-radius: 64px;
}

.right_about_box {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: var(--secondary-color);
    border-radius: 64px;
    @media screen and (max-width: 768px){
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
        
    }
}


.services_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 712px;
    width: 1352px;
    margin-bottom: 96px;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;

    }
}

.services_background {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.services_container {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
    grid-template-rows: 180px 180px 180px;
    grid-gap: 16px;
    align-self: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 116px 116px 116px;
        grid-template-rows: 116px 116px 116px 116px;
        img {
            width: 116px;
            height: 116px;
        }
    }
}
.services_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    border-radius: var(--main-border-radius);
    @media screen and (max-width: 768px) {
        img {
            width: 116px;
            height: 116px;
        }
    }
}
    
.left_services_box p {
    font-size: 48px;
    color: var(--main-color);
    font-weight: 700;
    margin: 0;
    padding: 0;

}
.left_services_box {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: var(--secondary-color);
    border-radius: 3rem;
    padding: 32px;
}




footer {
    display: flex;
    justify-content: center;
}
.footer_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 1352px;
    @media screen and (max-width: 768px){
        width: 100%;
        
    }
}
.footer_container p {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-color);
}
</style>

