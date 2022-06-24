gsap.from(".head", {y:30, opacity:0, duration:2, delay:1, stagger:.6})
  gsap.from(".btn", {y:30, opacity:0, duration:3, delay:3})
  gsap.from(".stick", {y:30, opacity:0, duration:2, delay:1, stagger:.6})
  gsap.from(".publick", {opacity:0, duration:3, delay:6, stagger:.8})
  gsap.to("h1", {scale:1.2, duration:3, delay:5})
  gsap.from(".form", {opacity:0, duration:3, delay:9})
  gsap.to(".lup", {scale:1.2, duration:3, delay:5})
  
  const one=document.querySelector(".ring")
  const one1=document.querySelector(".one1")
  const lup= document.querySelector(".lup");

  lup.addEventListener("click", startAmimat )

  function startAmimat() {

    one.style="display:none";
    one1.style="display:block";
  }

 