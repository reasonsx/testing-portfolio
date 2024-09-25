<script setup>
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

import { ref, computed } from 'vue' 
import getPortfolio from '../modules/getPortfolio.js'
const { portfolioItems } = getPortfolio()

const selectedCategory = ref('')

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value == '') {
    return portfolioItems.value
  }
  else {
    return portfolioItems.value.filter(item => item.category == selectedCategory.value)
  }
})
</script>

<template>
  <!-- <div class="logo_container">
  <svg class="logo_svg" width="567" height="595" viewBox="0 0 567 595" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M247.13 223.431L171.239 299.185L247.13 374.966V595L159.75 551.35V411.103L87.343 338.792V515.434L0 471.821V128.349L87.343 82.9627V259.605L159.75 187.294V45.395L247.13 0V223.431Z" fill="#1E3421"/>
<path d="M319.537 223.431L395.429 299.185L319.537 374.966V595L406.917 551.35V411.103L479.324 338.792V515.434L566.667 471.821V128.349L479.324 82.9627V259.605L406.917 187.294V45.395L319.537 0V223.431Z" fill="#1E3421"/>
</svg>
</div> -->

  <section id="home" class="home-section">
    <!-- <div class="about_section"> -->
      <div class="hero-background">
        <div class="hero-container">
          <div class="hero-box-1"></div>
          <div class="hero-box-2"><img src="../assets/img/icon_kk.svg" alt=""></div>
        </div>
        <!-- <h2>Hey there! <br>I'm Kamil Kregiel and I'm a multimedia designer :)</h2> -->
      </div>

    <!-- </div> -->
  </section>
<div class="empty-div">
  
</div>
  <!-- <section id="projects">
  <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
      
      <div class="img_background"><img :src="portfolioItem.image" alt=""></div>
      <h2>{{ portfolioItem.title }}</h2>
      <p>{{ portfolioItem.description }}</p>
      <button class="download_button"><a :href="portfolioItem.link" target="_blank"><p>View</p></a></button>
    </div>
  </section> -->
  <section id="services">
    <div class="services-background">
    <div class="services_section">
      <div class="services_background">
        <h2>About me</h2>
        <div class="services_container" id="about">
          <div class="left_services_box">
            <p>Offering a range of skills, I bring your digital projects to life with expertise in design and
              development.</p>
          </div>
          <div class="services_icon"><img src="../assets/img/figma.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/xd.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/illustrator.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/photoshop.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/indesign.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/vuejs.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/scss.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/wordpress.svg" alt="" draggable="false"></div>
          <div class="services_icon"><img src="../assets/img/javascript.svg" alt="" draggable="false"></div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section id="projects">
    <div class="new-projects-background">

      <!-- <div class="new-projects-container">
        <div class="text-box">
          <h3>Projects</h3>
          <p>Here are some of my latest projects. Click on the button to view more details.</p>
          <select v-model="selectedCategory">
            <option value="">All</option>
            <option value="web">Web</option>
            <option value="app">App</option>
            <option value="design">Design</option>
          </select>
        </div>
      </div> -->
<div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="new-projects-background">
  <div class="new-projects-container">
    <div class="text-box">
      <h3>{{ portfolioItem.title }}</h3>
      <h5>{{ portfolioItem.date }}</h5>
    <p>{{ portfolioItem.description }}</p>
   <!-- <button>View</button>  -->
  </div>
    
    <div class="new-projects-box"><img :src="portfolioItem.image" alt="">
    </div>
</div>
</div>
</div>
</section>

  
  

  <section id="contact" class="svg-contact-back">
    <div class="contact_section">
      <div class="contact_background">
        <h2>Contact</h2>
        <div class="contact_container">
          <div class="left_contact_box">
            <h3>Phone</h3>
            <a href="tel:+4591950940">+45 91 95 09 40</a>
            <h3>Email</h3>
            <a href="mailto:kamkre01@easv365.dk">kamkre01@easv365.dk</a>
            <h3>Address</h3>
            <p>Esbjerg 6700, Denmark</p>
          </div>
          <div class="github_box"><a href="https://github.com/reasonsx" target="_blank"><svg width="278" height="278"
                viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_53_29)">
                  <path
                    d="M246 0H32C14.33 0 0 14.33 0 32V246C0 263.67 14.33 278 32 278H246C263.67 278 278 263.67 278 246V32C278 14.33 263.67 0 246 0ZM167.33 225.32C162.99 226.2 161.4 223.41 161.4 221.07C161.4 218.13 161.54 208.58 161.54 196.69C161.54 188.31 158.79 183.03 155.61 180.24C175.13 178.04 195.51 170.56 195.51 136.49C195.51 126.8 192.18 118.87 186.55 112.71C187.41 110.51 190.45 101.39 185.67 89.21C185.67 89.21 178.29 86.85 161.66 98.31C154.72 96.4 147.2 95.37 139.83 95.37C132.46 95.37 125.12 96.36 118 98.31C101.36 86.87 93.99 89.21 93.99 89.21C89.22 101.41 92.24 110.51 93.11 112.71C87.62 118.87 84.15 126.8 84.15 136.49C84.15 170.54 104.53 178.18 123.91 180.24C121.46 182.44 119.14 186.4 118.42 192.13C113.34 194.49 100.78 198.31 92.96 184.8C92.96 184.8 88.33 176.3 79.52 175.7C79.52 175.7 70.99 175.7 78.95 181.12C78.95 181.12 84.74 183.77 88.64 194.04C88.64 194.04 93.7 209.9 117.99 204.62C117.99 211.97 118.13 219.02 118.13 221.07C118.13 223.41 116.54 226.2 112.2 225.32C77.5 213.57 52.5 180.4 52.5 141.19C52.5 92.14 91.54 52.51 139.82 52.51H139.84C187.98 52.51 227.16 92.15 227.02 141.19C227.02 180.4 202.01 213.57 167.31 225.32H167.33Z"
                    fill="#151a20" />
                </g>
                <defs>
                  <clipPath id="clip0_53_29">
                    <rect width="278" height="278" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div class="linkedin_box"><a href="https://www.linkedin.com/in/kamilkregiel/" target="_blank"><svg width="278"
                height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_53_27)">
                  <path
                    d="M246 0H32C14.33 0 0 14.33 0 32V246C0 263.67 14.33 278 32 278H246C263.67 278 278 263.67 278 246V32C278 14.33 263.67 0 246 0ZM76.8 63.32C85.88 63.32 93.24 70.69 93.24 79.77C93.24 88.85 85.88 96.22 76.8 96.22C67.72 96.22 60.36 88.85 60.36 79.77C60.36 70.69 67.72 63.32 76.8 63.32ZM93.37 214.68H60.23V109.39H93.37V214.68ZM219.31 214.68H186.23V159.4C186.23 126.17 146.26 128.67 146.26 159.4V214.68H113.32V109.39H146.26V123.6C160.18 98.07 219.3 96.16 219.3 148.02V214.68H219.31Z"
                    fill="#151a20" />
                </g>
                <defs>
                  <clipPath id="clip0_53_27">
                    <rect width="278" height="278" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div class="cv_box">
            <a href="../assets/pdf/CV-Kamil-Kregiel.pdf" download="CV-Kamil-Kregiel.pdf">
              <h3>CV</h3>
            </a>
          </div>
          <!-- <div class="video_cv_box"><a href="https://youtu.be/98PtQOIum_A" target="_blank"> -->
              <!-- <h3>VIDEO CV</h3> -->
            <!-- </a></div> -->
        </div>
      </div>
    </div>
  </section>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.svg-contact-back {
  background-image: url("../assets/img/background-svg-1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.hero-container {
  display: grid;
  grid-template-columns: 670px 474px;
  grid-template-rows: 474px;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 180px 180px;
    grid-template-rows: 180px 240px 180px 116px;
  }
}
.hero-box-1 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: var(--secondary-color);
  border-radius: var(--main-border-radius);

  @media screen and (max-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
}
.hero-box-2 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  background-color: var(--secondary-color);
  border-radius: var(--main-border-radius);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
.hero-box-2 img {
  width: auto;
  height: 442px;
  border-radius: var(--main-border-radius);
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: var(--main-border-radius);
    object-fit: cover;
  }
}

.home-section {
  height: 1000px;
}

.new-projects-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  background-color: var(--secondary-color);
  height: 100%;
  width: 100%;
  /* border-radius: 48px; */
  padding: 32px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    /* border-radius: 64px 64px 0 0; */
    padding-bottom: 16px;
    padding-top: 32px;
  }
}
.new-projects-container {
  display: flex;
  flex-direction: flex;
  align-self: center;
  background-color: #151a20;
  height: 474px;
  width: 1160px;
  border-radius: 32px;
  box-sizing: border-box;
  padding: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding-bottom: 16px;
    padding-top: 32px;
    flex-direction: column;
    align-items: center;
  }
}
.new-projects-container h3 {
  font-size: 48px;
  color: var(--white-color);
  font-weight: 700;
  margin: 0;
  padding: 0;
  /* margin-left: 16px; */
  @media screen and (max-width: 768px){
    font-size: 32px;
    
  }
}
.text-box {
  width: 458px;
  display: flex;              /* Make it a flex container */
  flex-direction: column;     /* Stack children vertically */
  justify-content: space-between; /* Space elements vertically */
  height: 100%;              /* Make it take full height */
  @media screen and (max-width: 768px){
    width: 376px;
    
  }
}
.text-box p {
  font-size: 20px;
  color: var(--white-color);
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: 556px;
   @media screen and (max-width: 768px){
    font-size: 16px;
    width: 376px;
    
  }
  
}
.new-projects-box:hover {
  scale: 0.97;
  transition: all 0.3s ease;
}

.new-projects-box:not(:hover) {
  scale: 1.0;
  transition: all 0.3s ease-out;
}
.text-box h5 {
  font-size: 20px;
  margin: 0;
}
.text-box button {
  width: 180px;
  height: 64px;
  background-color: var(--main-color);
  border-radius: 32px;
  border: none;
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  font-family: var(--main-font);
  margin-top: auto;         /* Push the button to the bottom */
  /* align-self: center; */
  @media screen and (max-width: 768px){
    align-self: center;
    height: 48px;
    
  }
}

.new-projects-box {
  width: 556px;
  height: 442px;
  background-color: var(--main-color);
  border-radius: 24px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    width: 376px;
    height: 240px;
    border-radius: 32px;
    margin-left: 0;
    
  }
}
.new-projects-box img {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 376px;
    height: 240px;
    border-radius: 32px;
    object-fit: cover;
    
  }
}
.new-projects-background {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.new-projects-background h2 {
  color: var(--main-color);
}



:root {
  --main-font: 'Poppins', sans-serif;
  --black-color: #050505;
  --white-color: #efefef;
  --gray-color: #313131;
  --main-color: #1B2B1C;
  /* --secondary-color: #DEFE10; */
  --secondary-color: #DEFE10;
  --tertiary-color: #151a20;
  --main-border-radius: 32px;
  --font-weight: 700;
  --default-font-size: 32px;
}

body,
html {
  background-color: var(--main-color);
  font-family: var(--main-font);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}
.logo_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  z-index: 0;
}
.logo_svg {
  position: absolute;
  justify-self: center;
  top: 128px;
  /* left: 25%; */
  z-index: 0;
  /* width: 100px; */
  /* height: 100px; */
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    
  }
}
.card {
  /* background-color: rgba(5, 5, 5, 0.70); */
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
  width: 1192px;
  height: auto;
  border-radius: 48px;
  display: grid;
  grid-template-columns: 376px 768px;
  grid-template-rows: 80px 298px 64px 64px;
  gap: 16px;
  margin-bottom: 128px;
  padding: 16px;
  @media screen and (max-width: 768px) {
    width: 376px;
    height: auto;
    grid-template-columns: 376px;
    grid-template-rows: 80px 298px 64px 64px;
    gap: 16px;
    margin-top: 48px;
    margin-bottom: 0px;
    
  }
}
.card p {
  font-size: 24px;
  color: var(--white-color);
  margin: 0;
  padding: 0;

}
.img_background {
  display: flex;
  background-color: var(--black-color);
  border-radius: 48px;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card h2 {
  font-size: 56px;
  color: var(--secondary-color);
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px){
    font-size: 48px;
    margin-bottom: 16px;
    
  }
}
.card img {
  width: 344px;
  height: 442px;
  border-radius: 40px;
  object-fit: cover;
} 
.card button {
  width: 180px;
  height: 64px;
  background-color: var(--black-color);
  border-radius: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 2;
  margin-left: 98px;

  p {
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    font-family: var(--main-font);
  }
}

.download_button:hover {
  scale: 1.05;
  transition: all 0.3s ease;
}

.download_button:not(:hover) {
  scale: 1.0;
  transition: all 0.3s ease-out;
}
.svg_logo {
  z-index: -1;
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
  transition: all 0.4s ease;
}

li:not(:hover) {
  transition: all 0.4s ease-out;
}

nav a {
  display: flex;
  width: 100%;
  height: 100%;
  color: var(--white-color);
  font-weight: 500;
  text-decoration: none;
  align-items: center;
  justify-content: center;
}

a.active {
  background-color: var(--white-color);
  color: var(--black-color);
  border-radius: 16px;
  transition: all 0.5s ease;
  font-weight: 600;
}


.about_background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1360px;
  height: 600px;
  margin-bottom: 380px;
  /* margin-top: 48px; */
  @media screen and (max-width: 768px){
    width: 376px;
    height: auto;
    margin-top: 96px;
    margin-bottom: 256px;
    h2 {
      font-size: 48px;
    }
  }
}


.about_background h2 {
  z-index: 1;
  /* Ensure the text stays above the SVG */
  position: relative;
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

  @media screen and (max-width: 768px) {
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
    grid-gap: 14px;

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
  @media screen and (max-width: 768px){
    font-size: 32px;
    
  }

}

.left_services_box {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: var(--secondary-color);
  border-radius: 3rem;
  padding: 32px;
  width: 1;
}
.left_contact_box h3 {
  font-size: 48px;
  color: var(--secondary-color);
  font-weight: 700;
  margin: 0;
  margin-left: 32px;
  margin-top: 32px;
}

.left_contact_box p {
  font-size: 24px;
  color: var(--secondary-color);
  font-weight: 400;
  margin: 0;
  margin-left: 32px;
  height: 24px;
}
.left_contact_box a {
  font-size: 24px;
  color: var(--secondary-color);
  font-weight: 400;
  margin: 0;
  margin-left: 32px;
  height: 24px;
  justify-content: left;
  align-items: normal;
  @media screen and (max-width: 768px){
    width: 300px;
    
  }
}
.contact_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  /* background-color: var(--secondary-color); */
  height: 100%;
  width: 1288px;
  border-radius: 48px 48px 0 0;
  padding-top: 32px;
  margin-top: 128px ;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 0;
    padding-bottom: 16px;
    padding-top: 32px;
  }
}

.contact_background {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.contact_background h2 {
  color: var(--main-color);
}

.contact_container {
  display: grid;
  grid-template-columns: 278px 278px 278px 278px;
  grid-template-rows: 278px 180px;
  grid-gap: 16px;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 180px 180px;
    grid-template-rows: 180px 240px 180px 116px;
  }
}

.left_contact_box {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: var(--tertiary-color);
  border-radius: var(--main-border-radius);

  @media screen and (max-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

.github_box {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 4;
  border-radius: var(--main-border-radius);

  @media screen and (max-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

.linkedin_box {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 4;
  grid-column-end: 5;
  border-radius: var(--main-border-radius);

  @media screen and (max-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}

.cv_box {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 5;
  background-color: var(--tertiary-color);
  border-radius: var(--main-border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 24px; */

  @media screen and (max-width: 768px) {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 24px;
  }
}

.video_cv_box {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 5;
  background-color: var(--tertiary-color);
  border-radius: var(--main-border-radius);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}

.cv_box h3 {
  font-size: 48px;
  color: var(--secondary-color);
  font-weight: 700;
}

.video_cv_box h3 {
  font-size: 48px;
  color: var(--secondary-color);
  font-weight: 700;
}


.github_box:hover,
.linkedin_box:hover,
.cv_box:hover,
.video_cv_box:hover {
  scale: 1.05;
  transition: all 0.3s ease;
}

.video_cv_box:not(:hover),
.cv_box:not(:hover),
.linkedin_box:not(:hover),
.github_box:not(:hover) {
  scale: 1.0;
  transition: all 0.3s ease-out;
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
  width: 1288px;
  padding-top: 32px;
  /* background-color: var(--secondary-color); */
  @media screen and (max-width: 768px) {
    padding-top: 0;
    width: 100%;
    background-color: var(--main-color);
  }
}

.footer_container p {
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-color);
  font-weight: 500;
  @media screen and (max-width: 768px) {
    color: var(--white-color);
    font-weight: 500;
    
  }
}
</style>
