
import { ref } from 'vue'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'Fantasy Quest',
      date: 'May 2024',
      description: "For our second-semester project, I developed a dynamic website for the Fantasy Festival Esbjerg 2024, capturing the magic of its Fantasy Quest theme with event listings, an interactive map, and integrated ticketing. Designed with responsive layouts and custom fantasy elements, the website offers an immersive experience across all devices, showcasing my ability to blend creativity and functionality to engage users and promote a vibrant cultural event.",
      image: require('../src/assets/img/fantasy-fest.png'),
      link: 'https://fantasy-quest-d735e.web.app/',
    },
    {
      id: 2,
      title: 'Trapholt Redesign',
      date: 'December 2023',
      description: 'On the first semester, my team transformed Trapholt into an engaging paradise for families. Over three weeks, we developed a brand new identity that makes the museum a welcoming space for children and adults alike. Our project redefined Trapholt as a place of learning and fun, infusing it with interactive elements. This redesign, which I’m proud to showcase in my portfolio, turns every visit into an adventure that sparks the imagination and delights visitors of all ages.',
      image: '../src/assets/img/trapholt_website.png',
      link: 'https://trapholt-redesign.netlify.app/',
      category: 'web'
  
    },
    {
      id: 3,
      title: 'Eventezy',
      date: 'October 2023',
      description: "In my first semester, I created Eventezy, a fully coded website from scratch. It's your go-to platform for concert and event tickets, designed for seamless browsing and purchasing. My portfolio highlights the journey from conception to execution, showcasing my passion for crafting intuitive digital solutions that bring people closer to unforgettable moments.",
      image: '../src/assets/img/event.png',
      link: 'https://eventezy.netlify.app/',
    },
    {
      id: 4,
      title: 'International Day',
      date: 'October 2023',
      description: "I created a vibrant poster to promote our school's International Day, a yearly celebration of cultural diversity. With bold colors and captivating imagery, my design invites everyone to immerse themselves in the rich tapestry of global traditions. This project highlights my ability to blend graphic design with cultural appreciation, enticing others to join in the festivities and embrace the beauty of our diverse community.",
      image: '../src/assets/img/int-day.png',
      link: '../src/assets/pdf/international_day_df.pdf',
    },
    // {
    //   id: 4,
    //   title: 'Gen Z Infrographic',
    //   date: 'October 2023',
    //   description: "In an effort to demystify the workplace attitudes and behaviors of Generation Z, I designed an infographic that distills comprehensive statistical data into engaging, easy-to-understand visual formats. This project highlights key insights into how Gen Z views work, their career priorities, and their expectations from employers.",
    //   image: 'src/assets/img/genz_infographic.png',
    //   link: 'src/assets/pdf/genz_pdf.pdf',
    // },
    // {
    //   id: 5,
    //   title: 'Interactive Esbjerg',
    //   date: 'October 2023',
    //   description: "For a project aimed at showcasing Esbjerg, I created a vibrant poster and teamed up to develop an interactive folder. Just scan the QR code on the poster to dive into a digital guide full of videos, photos, and cool facts about Esbjerg. This project spotlights my knack for blending eye-catching design with interactive tech to spark curiosity and connect people with places.",
    //   image: 'src/assets/img/esbjerg_poster.png',
    //   link: 'src/assets/pdf/esbjerg_poster.pdf',
    // },
  ])

  return { portfolioItems }
}

export default getPortfolio
