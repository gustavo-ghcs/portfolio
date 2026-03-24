'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalProfession = document.querySelector("[data-modal-profession]");

// data for testimonials
const testimonialsData = {
  'Weliton Oliveira': {
    img: './assets/images/avatar-weliton.png',
    profession: 'Fotógrafo',
    text: 'Trabalhar com Gustavo na área de drones foi incrível. Com um domínio total do drone e um olhar atento, ele captura imagens aéreas de eventos com uma qualidade impressionante. Sua criatividade e dedicação não só elevam o nível do trabalho, mas também garantem o sucesso dos eventos que cobre.'
  },
  'Geovanna Domingos': {
    img: './assets/images/geovanna-avatar.jpg',
    profession: 'Desenvolvedora',
    text: 'Como desenvolvedora, eu admiro profundamente a competência técnica de Gustavo no desenvolvimento web e mobile. Sua experiência com Python, JavaScript, React e React Native é notável, e ele se destaca em criar soluções eficazes e inovadoras. Gustavo não apenas domina as ferramentas e tecnologias, mas também possui uma habilidade impressionante para enfrentar desafios e encontrar soluções criativas. Seu comprometimento com o desenvolvimento e a qualidade do trabalho é inspirador e essencial para qualquer projeto.'
  },
  'Thiago Paiva': {
    img: './assets/images/thiago-avatar.jpg',
    profession: 'Empresário',
    text: 'Gustavo é um verdadeiro exemplo de empreendedorismo e inovação. Sua paixão por criar soluções tecnológicas e sua visão para o futuro são inspiradoras. Ele demonstra um grande talento para identificar oportunidades e desenvolver ideias que têm um impacto significativo. Gustavo é um líder natural, sempre buscando maneiras de avançar e trazer progresso para suas iniciativas. Sua dedicação ao empreendedorismo e sua capacidade de implementar soluções inovadoras fazem dele um profissional excepcional.'
  }
};

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {
    const name = this.querySelector("[data-testimonials-title]").innerHTML;
    const data = testimonialsData[name];

    modalImg.src = data.img;
    modalImg.alt = name;
    modalTitle.innerHTML = name;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    modalProfession.innerHTML = data.profession;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "tudo") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function moveSlide(direction, type) {
  const track = document.querySelector(`.carousel-track.${type}`);
  const items = document.querySelectorAll(`.carousel-track.${type} .carousel-item`);
  const itemWidth = items[0].offsetWidth + 20; // Largura + margem

  track.scrollBy({
      left: direction * itemWidth,
      behavior: "smooth"
  });
}