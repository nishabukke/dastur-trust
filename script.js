


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


        function page4Animation() {
            var elemC = document.querySelector("#elem-container")
            var fixed = document.querySelector("#fixed-image")
            elemC.addEventListener("mouseenter", function () {
                fixed.style.display = "block"
            })
            elemC.addEventListener("mouseleave", function () {
                fixed.style.display = "none"
            })

            var elems = document.querySelectorAll(".elem")
            elems.forEach(function (e) {
                e.addEventListener("mouseenter", function () {
                    var image = e.getAttribute("data-image");
                    fixed.style.backgroundImage = `url(${image})`;
                })
            })
        }

        page4Animation();
