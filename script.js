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
  description: 'Hello! I am Masoma Rezaie, a passionate web developer with a year of experience and a strong foundation in programming from my Computer Science studies. Currently, I am enhancing my skills through a Full Stack Software Development program, focusing on HTML, CSS, and JavaScript to create efficient and user-friendly solutions.',
  tools: ['TimeManagement', 'GitHub', 'Git', 'CodeReviewer'],
  language: ['HTML', 'CSS', 'JavaScript'],
  certification: [
    { name: 'Computer Trainer', img: './assess/Javascrip.jpeg' },
    { name: 'Responsive Web Design (HTML, CSS)', img: './assess/Responsive web design.jpeg' },
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
    img: './assess/Roman Number.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: ' https://masomrezaie.github.io/build-a-roman-numeral-checked/',
    sourceLink: 'https://github.com/MasomRezaie/build-a-roman-numeral-checked',
  },
  {
    title: 'CashRegisterAppr',
    shortDes: 'This application calculates and displays change due to a customer based on the price of an item ',
    longDes: `
    This project is a cash register application that calculates and displays change due to a customer based on the price of an item,
    the cash provided,It showes different messages depending on the scenario.`,
    img: './assess/Cash Register.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://masomrezaie.github.io/Build-a-Cash-Register/',
    sourceLink: 'https://github.com/MasomRezaie/Build-a-Cash-Register',
  },
  {
    title: 'Palindrome Checker',
    shortDes: 'Palindrome Checker App Check if a word or phrase can be read the same way forwards and backwards.',
    longDes: `
    This Palindrome Checker app verifies if a sentence reads the same forwards and backwards,
    considering case, punctuation, and spacing. It alerts users with an empty input.`,
    img: './assess/Plindrome Cheaker.PNG',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: '  https://masomrezaie.github.io/Build-a-Palindrome-Checker/',
    sourceLink: 'https://github.com/MasomRezaie/Build-a-Palindrome-Checker/pull/1',
  },
  {
    title: 'PokemonSearchApp',
    shortDes: 'A web application for searching Pokémon details by name or ID using the PokéAPI',
    longDes: `A web application for searching Pokémon details by name or ID using the PokéAPI Proxy provided by freeCodeCamp.
    Search: Enter a Pokémon name or ID to retrieve detailed information.`,
    img: './assess/Pokemon.PNG',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://masomrezaie.github.io/Build-a-Pokemon-Search-App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Pokemon-Search-App',
  },
  {
    title: 'survey_Form',
    shortDes: ` a complete survey form applied html validation that
    input reliable data from users.`,
    longDes: `
   create a complete survey form using HTML and CSS
   applied some HTML form validation.
   CSS style to make form more user friendly.`,
    img: './assess/Survey form.png',
    technology: ['HTML', 'CSS'],
    liveLink: 'https://masomrezaie.github.io/Table/',
    sourceLink: 'https://github.com/MasomRezaie/Table',
  },
  {
    title: 'tribute-page',
    shortDes: 'The tribute page structure requires main section to all encompass content. ',
    longDes: `
    The tribute page structure requires a main section labeled "main" to encompass all content.
    It includes a title section ("title") with descriptive text about the subject.`,
    img: './assess/Tribute Page.jpg',
    technology: ['HTML', 'CSS'],
    liveLink: 'https://masomrezaie.github.io/Tribute-page/',
    sourceLink: 'https://github.com/MasomRezaie/Tribute-page',
  },

];

const closeModals = () => {
  projectModal.classList.add('hidden');
};

const showModal = (index) => {
  const project = projects[index];
  modalContent.innerHTML = `
    <button id="close">&times;</button>
    <div class="modal-header">
      <h2>${project.title}</h2>
    </div>
    <ul class="langs" id="margin-ul">
      <li class="lang-item">${project.technology.join(' / ')}</li>
    </ul>
    <div class="modal-body">
      <img src="${project.img}" alt="Image">
      <div class="modal-body-p">
      <p>${project.longDes}</p>
      </div>
    </div>
    <div class="modal-footer">
      <a href="${project.sourceLink}">Source Code</a>
      <a href="${project.liveLink}">Live Link</a>
    </div>`;
  projectModal.classList.remove('hidden');

  // Attach event listener to close button inside modal
  document.getElementById('close').addEventListener('click', closeModals);
};

projectContent.innerHTML = projects.map((project, index) => `
  <div class="box">
    <div class="proj-img">
      <img src="${project.img}">
    </div>
    <div class="proj-info">
    <h3>${project.title}</h3>
    <p>${project.shortDes}</p>
    <ul class="langs">
      <li class="lang-item">${project.technology.join(' / ')}</li>
    </ul>
    <button class="btn" data-index="${index}">See More</button>
  </div>
  </div>`).join('');

// Attach event listeners to dynamically created buttons
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    showModal(index);
  });
});

// Contact form validation
const contactForm = document.getElementById('form');
const errorMsg = document.getElementById('error-msg');

contactForm.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMsg.classList.remove('hidden');
  } else {
    errorMsg.classList.add('hidden');
  }
});

const formFields = ['name', 'email', 'message'];

formFields.forEach((field) => {
  const input = document.getElementById(field);
  input.value = localStorage.getItem(field) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(field, input.value);
  });
});