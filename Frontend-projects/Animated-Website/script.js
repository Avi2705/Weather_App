document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // Animate logo/title on scroll
  gsap.fromTo(
    "#title",
    {
      scale: 7.2,
      y: -180,
    },
    {
      scale: 2,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)",
      },
    }
  );

  // Slide text animation
  const discover = gsap.timeline({
    scrollTrigger: {
      trigger: ".slide",
      start: "top 20%",
      scrub: 2,
    },
  });

  discover.to(".slide1", { y: 240 });
  discover.to(".slide2", { y: 240 });
  discover.to(".slide3", { y: 240 });
  discover.to(".slide4", { y: 240 });

  // Expand image animation
  gsap.to("#image", {
    clipPath: "circle(75% at 50% 50%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#image-section > #images",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      pin: true,
    },
  });

  // Animate box images
  const allGrids = document.querySelectorAll("#allgrid");
  allGrids.forEach((grid) => {
    const boxes = grid.querySelectorAll("#box");
    boxes.forEach((box) => {
      gsap.from(box, {
        y: 500,
        duration: 0.5,
        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
    });
  });

  // ✅ FIXED HEADING UPDATE LOGIC
  const heading = document.querySelectorAll("#furniture-section h2")[0]; // Selects first h2 inside second furniture-section
  const grids = document.querySelectorAll("#grid");
  const headingTexts = ["Furniture", "Decor", "Office", "Tech"];

  grids.forEach((grid, index) => {
    ScrollTrigger.create({
      trigger: grid,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => {
        heading.textContent = headingTexts[index] || "Furniture";
      },
      onEnterBack: () => {
        heading.textContent = headingTexts[index] || "Furniture";
      },
    });
  });

  // Fix heading position during scroll
  ScrollTrigger.create({
    trigger: "#furniture-section",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onEnter: () => {
      gsap.set(heading, { position: "fixed", bottom: 0, zIndex: -1000 });
    },
    onLeaveBack: () => {
      gsap.set(heading, { position: "relative", bottom: 0 });
    },
  });

  heading.textContent = headingTexts[0]; // Initial heading
});
