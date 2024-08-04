// Hamburger menu
const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navlinkEls = document.querySelectorAll('.nav-link');
humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

navlinkEls.forEach((navlinkEl) => {
  navlinkEl.addEventListener('click', () => {
    document.querySelector('.borders')?.classList.remove('borders');
    navlinkEl.classList.add('borders');
  });
});

// About section content
const aboutContent = document.getElementById('about');
const skills = {
  description: 'Hello! I am Farwa Muhibzada, a passionate web developer with a year of experience and a strong foundation in programming from my Computer Science studies. Currently, I am enhancing my skills through a Full Stack Software Development program, focusing on HTML, CSS, and JavaScript to create efficient and user-friendly solutions.',
  tools: ['TimeManagement', 'GitHub', 'Git', 'CodeReviewer'],
  language: ['HTML', 'CSS', 'JavaScript'],
  certification: [
    { name: 'JavaScript Algorithm & Data Structure', img: './asset/certificate_js.png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/responsive-web-design' },
    { name: 'Responsive Web Design (HTML, CSS)', img: './asset/Screenshot (807).png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/javascript-algorithms-and-data-structures-v8' },
  ],
};

aboutContent.innerHTML = `
  <div class="about-text">
    <h2>About <span>Me</span></h2>
    <h4>Web Develo<span>pe</span>r</h4>
    <p id="mypara">${skills.description}</p>
    <br>
    <ul>
      <li class="skill-text"><span >Skills: </span>${skills.tools.join(', ')}</li>
      <li class="skill-text"><span>Languages: </span>${skills.language.join(', ')}</li>
    </ul>
  </div>
   <div class="about-img">
    ${skills.certification.map((certificate) => `
      <h2>${certificate.name}</h2>
      <br>
      <a href='${certificate.link}' target="_blank">
        <img src='${certificate.img}' alt='certificate picture'>
      </a>`).join('')}
  </div>
`;

// Project section contents
const projectContent = document.getElementById('project-content');
const projectModal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');

// Project data
const projects = [
  {
    title: 'RomanConverter',
    shortDes: 'An application convert any number in to roman number fulfilling all requirements of FreeCodeCamp',
    longDes: `
    This application converts any number to a Roman numeral, fulfilling all requirements for a FreeCodeCamp project:
    Includes an input element and a button.
    Displays results in a div.`,
    img: './asset/romanconverter.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Roman-Numerals-Converter/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Roman-Numerals-Converter/',
  },
  {
    title: 'CashRegisterAppr',
    shortDes: 'This application calculates and displays change due to a customer based on the price of an item ',
    longDes: `
    This project is a cash register application that calculates and displays change due to a customer based on the price of an item,
    the cash provided,It showes different messages depending on the scenario.`,
    img: './asset/cashregister.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Cash_Register_App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Cash_Register_App',
  },