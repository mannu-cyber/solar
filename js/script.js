function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

const tl = gsap.timeline();

document.querySelector(".white");

tl.to(".white", {
  width: "100%",
  height: "200%",
  duration: 2,
  scale: 1.12,
});

tl.to(".loader", {
  y: "-100%",
  duration: 1,
  opacity: 0,
});

function simulateLoader() {
  var percentage = 1;
  var duration = 1000; // 2 seconds
  var startTime = performance.now();

  function updateContent(timestamp) {
    var elapsed = timestamp - startTime;
    var progress = elapsed / duration;

    document.getElementById("load").innerText =
      +Math.round(Math.min(progress * 100, 100)) + "%";

    if (progress < 1) {
      requestAnimationFrame(updateContent);
    }
  }

  requestAnimationFrame(updateContent);
}

setTimeout(simulateLoader, 100);

tl.from("nav a", {
  opacity: 0,
  y: 10,
  stagger: 0.1,
});

setTimeout(function () {
  Shery.textAnimate(" .page1 h1", {
    style: 1,
    y: 50,
    delay: 0.1,

    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    stagger: 0.2,
  });
}, 2200);

tl.from(".vide", {
  opacity: 0,
});

tl.from(".thodasacontent", {
  opacity: 0,
});

tl.from(".right-hero p", {
  opacity: 0,
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    const text = new SplitType(link, { types: " chars" });

    gsap.from(text.chars, {
      duration: 1,
      ease: "bounce.out",
      y: -20,
      stagger: 0.02,
      scale: 1.2,
      autoAlpha: 1,

      x: 20,
    });
  });
});

let paragraph = " ";
document
  .querySelector(".content-anim h1")
  .textContent.split(" ")
  .forEach(function (dets) {
    paragraph += `<span> ${dets} </span>`;
    document.querySelector(".content-anim h1").innerHTML = paragraph;
  });

gsap.to(".content-anim h1 span", {
  scrollTrigger: {
    trigger: ".content-anim h1 span",
    scroller: ".main",
    start: "top 80%",
    end: "top 40%",
    scrub: 0.5,
  },
  stagger: 0.2,
  color: "#741BD4",
});

const text = new SplitType(".wrapper2 h1 ", { types: "words, chars" });

gsap.from(text.chars, {
  scrollTrigger: {
    trigger: " .wrapper2 h1 ",
    scroller: ".main",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5,
  },
  duration: 0.6,
  transformOrigin: "100% 50%",
  ease: "back",
  stagger: 0.02,
  color: "#232323",
});

gsap.to(".page5 img", {
  scrollTrigger: {
    start: "top 10%",
    end: "top -150%",
    scroller: ".main",
    trigger: ".page5 img",
    pin: true,
  },
});

document.querySelector("#top").addEventListener("click", () => {
  gsap.to('.main', 
    { y: 0, 

      duration:1.5,
      ease: "power3.out"
   });
  console.log("hello");
});
