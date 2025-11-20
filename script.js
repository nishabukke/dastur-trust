


let tl = gsap.timeline();

tl.from(".banner-heading h1", {
    y: 60,
    opacity: 0,
    duration: 1.5,
    ease: "powe2.out"
},"-=0.4");

tl.from(".banner-heading p", {
    y: 60,
    opacity: 0,
    duration: 1.5,
    ease: "powe2.out"
},"-=0.4");

gsap.registerPlugin(ScrollTrigger);


// Animate the text spans inside #page2
const texts = document.querySelectorAll(".school-section h2 span");

texts.forEach((text) => {
  gsap.set(text, { y: "100%", opacity: 0 }); // Set initial state for each span
});

// Animate the text spans when #page2 appears
gsap.to(texts, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".school-section",
    start: "top 100%",
    toggleActions: "play none none none"
  },
});

gsap.to(".ek", {
  duration: 3,
  scrollTrigger: {
    trigger: ".ek",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".do", {
  duration: 3,
  scrollTrigger: {
    trigger: ".do",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".tin", {
  duration: 3,
  scrollTrigger: {
    trigger: ".tin",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".char", {
  duration: 3,
  scrollTrigger: {
    trigger: ".char",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});

gsap.to(".paanch", {
  duration: 3,
  scrollTrigger: {
    trigger: ".paanch",
    start: "top top",
    end: "+=60%",
    scrub: true,
    pin: true,
    pinSpacing: false
  },
});



function activeTab(evt, id) {
           
  // Get all elements with class="tablinks" and remove the class "active"
   let tabactive = document.getElementsByClassName("TabButtonSelected");
   tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

   document.getElementById(id).style.display = "block";
   evt.currentTarget.className += " TabButtonSelected";

   displaySection(evt,id)
}

function displaySection(evt, id) {

   let tabactive = document.getElementsByClassName("tab-section");
   tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
   // add below line of codes
   [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
   document.getElementById("Section" + id).style.display = "block";
   evt.currentTarget.className += " d-chart-show";

}





// Lightbox modal
const body = document.body;
const items = document.querySelectorAll(".gallery__item");
const modal = document.createElement("section");
const modalImg = document.createElement("img");
const modalPrev = createButton(prevItem);
const modalNext = createButton(nextItem);
const modalClose = createButton(closeModal);
let currentItem = 0;

modal.classList.add("gallery__modal");
modalPrev.classList.add("gallery__navigation--prev");
modalNext.classList.add("gallery__navigation--next");
modalClose.classList.add("gallery__navigation--close");

function createButton(action) {
    const button = document.createElement("button");
    button.addEventListener("click", action);
    return button;
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showModal();
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showModal();
}

function closeModal() {
    modal.remove();
    body.classList.remove('noscroll'); // Ensure scrolling is enabled
}

function showModal() {
    const clickedImage = items[currentItem].querySelector("img");
    modalImg.src = clickedImage.src;
    modalImg.alt = clickedImage.alt;
    modal.innerHTML = ''; // Clear the modal content
    modal.append(modalImg, modalPrev, modalNext, modalClose);
    body.appendChild(modal);
}

// Attach click event to each gallery item
items.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentItem = index; // Set the clicked image index
        showModal();
        body.classList.add('noscroll'); // Disable scrolling when modal is open
    });
});

// Close modal with Escape key
document.body.addEventListener('keyup', (ev) => {
    if (ev.key === "Escape" && body.contains(modal)) {
        closeModal();
    }
});

// Hover functionality for image captions
items.forEach((item) => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery__image__caption");

    item.addEventListener("mouseenter", () => {
        caption.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        caption.style.opacity = "0";
    });
});




// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".canva_expander" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".canva_expander" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".canva_expander" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});