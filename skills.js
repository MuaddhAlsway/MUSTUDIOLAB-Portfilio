const skillItems = $$(".skill-item");
// Fade + slide animation

      
document.addEventListener("DOMContentLoaded", () => {

  const skillItems = document.querySelectorAll(".skill-item");

  // -------------------------------
  // 1️⃣ Fade + Slide Animation
  // -------------------------------
  gsap.utils.toArray(".skill-item").forEach(item => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // -------------------------------
  // 2️⃣ Progress Bar Animation
  // -------------------------------
  skillItems.forEach(item => {
    const level = item.getAttribute("data-skill") || "0";
    const bar = item.querySelector(".progress div");

    if (bar) {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: level + "%",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%", 
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  });
gsap.from(".site-footer", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".site-footer",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});
});
