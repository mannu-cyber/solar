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

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    const text = new SplitType(link, { types: "words, chars" });

    gsap.from(text.chars, {
      duration: 0.6,
      // transformOrigin: "10% 50%",
      ease: "back",
      stagger: 0.02,
      scale: 2,
      autoAlpha: 0,
      rotationX: -80,
      // y: 10,
      x: 10,
    });
  });
});

Shery.textAnimate(" .page1 h1, .page1 p", {
  style: 1,
  y: 50,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  stagger: 0.2,
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
