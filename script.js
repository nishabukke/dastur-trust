


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


// career login form functionality


document.getElementById("careerLoginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // If everything is fine, submit form
    if (isValid) {
        this.submit();
    }
});

document.querySelectorAll(".login-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});






// Open modal when clicking "New User? Register Here"
document.querySelector(".new-user-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("newUserModal").style.display = "flex";
});

// Close modal
document.querySelector(".modal-close").addEventListener("click", function() {
    document.getElementById("newUserModal").style.display = "none";
});

// Close modal on clicking outside
window.addEventListener("click", function(e) {
    const modal = document.getElementById("newUserModal");
    if (e.target === modal) modal.style.display = "none";
});


// New User Form Validation
document.getElementById("newUserForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const sal = document.getElementById("salutation");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const regEmail = document.getElementById("regEmail");
    const mobile = document.getElementById("mobile");
    const regPassword = document.getElementById("regPassword");

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validation
    if (sal.value === "") {
        document.getElementById("salError").textContent = "Required";
        isValid = false;
    }

    if (fname.value.trim() === "") {
        document.getElementById("fnameError").textContent = "Required";
        isValid = false;
    }

    if (lname.value.trim() === "") {
        document.getElementById("lnameError").textContent = "Required";
        isValid = false;
    }

    let mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailPattern.test(regEmail.value.trim())) {
        document.getElementById("regEmailError").textContent = "Enter valid email";
        isValid = false;
    }

    if (!/^[0-9]{10}$/.test(mobile.value)) {
        document.getElementById("mobileError").textContent = "Enter valid 10-digit number";
        isValid = false;
    }

    if (regPassword.value.length < 6) {
        document.getElementById("regPassError").textContent = "Min 6 characters required";
        isValid = false;
    }

    if (isValid) this.submit();
});



// Open Forgot Password Modal
document.querySelector(".forgot-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("forgotPasswordModal").style.display = "flex";
});

// Close Forgot Modal
document.querySelector(".forgot-close").addEventListener("click", function() {
    document.getElementById("forgotPasswordModal").style.display = "none";
});

// Click outside to close
window.addEventListener("click", function(e) {
    const modal = document.getElementById("forgotPasswordModal");
    if (e.target === modal) modal.style.display = "none";
});

// Forgot Password Validation
document.getElementById("forgotPasswordForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("forgotEmail").value.trim();
    let error = document.getElementById("forgotEmailError");
    let valid = true;

    error.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        error.textContent = "Email is required";
        valid = false;
    } else if(!emailPattern.test(email)){
        error.textContent = "Enter a valid email address";
        valid = false;
    }

    if(valid){
        this.submit();
    }
});




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