const gsapIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_pregunta1',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro.to('.navegador', {
  opacity:1,
  onUpdate: function(){
    document.getElementById('nav_texto').textContent = '';
  },
},);
gsapIntro.to('.navegador_texto', {
   color:'var(--lima)',
},);



const gsapIntro2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro1',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro2.to('.navegador', {
  opacity:1,
  onUpdate: function(){
    document.getElementById('nav_texto').textContent = 'intro';
  },
},);
gsapIntro2.to('.navegador_div', {
  borderColor:'var(--verde)',
},'<');
gsapIntro2.to('.navegador1', {
  backgroundColor:'var(--verde)',
},'<');
gsapIntro2.to('.navegador_texto', {
  color:'var(--verde)',
},'<');

const gsapIntro3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro2',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro3.to('.navegador_texto', {
  color:'var(--lima)',
},'<');
gsapIntro3.to('.navegador_div', {
  borderColor:'var(--lima)',
},'<');
gsapIntro3.to('.navegador1', {
  backgroundColor:'var(--lima)',
},'<');

const gsapIntro4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro2',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro4.to('.navegador_div', {
  borderColor:'var(--verde)',
},'<');
gsapIntro4.to('.navegador1', {
  backgroundColor:'var(--verde)',
},'<');
gsapIntro4.to('.navegador_texto', {
  color:'var(--verde)',
},'<');

const gsapIntro5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro3',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro5.to('.navegador_texto', {
  color:'var(--lima)',
},'<');
gsapIntro5.to('.navegador_div', {
  borderColor:'var(--lima)',
},'<');
gsapIntro5.to('.navegador1', {
  backgroundColor:'var(--lima)',
},'<');


const gsapIntro6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro4',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro6.to('.navegador_div', {
  borderColor:'var(--verde)',
},'<');
gsapIntro6.to('.navegador1', {
  backgroundColor:'var(--verde)',
},'<');
gsapIntro6.to('.navegador_texto', {
  color:'var(--verde)',
},'<');

const gsapIntro7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_intro5',  
    start: 'top bottom',
    end: 'top center',
    scrub: 1,    
    markers: false, 
  },
});
gsapIntro7.to('.navegador_texto', {
  color:'var(--lima)',
},'<');
gsapIntro7.to('.navegador_div', {
  borderColor:'var(--lima)',
},'<');
gsapIntro7.to('.navegador1', {
  backgroundColor:'var(--lima)',
},'<');



const gsapNavCiclo1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_nav_ciclo1',  
    start: 'top bottom',
    end: 'top top',
    scrub: 1,    
    markers: true, 
  },
});
gsapNavCiclo1.to('.navegador_div', {
  borderColor:'var(--verde)',
},'<');
// gsapNavCiclo1.to('.navegador1', {
//   backgroundColor:'transparent',
// },'<');
// gsapNavCiclo1.to('.navegador2', {
//   backgroundColor:'var(--verde)',
// },'<');
// gsapNavCiclo1.to('.navegador_texto', {
//   color:'var(--verde)',
// },'<');
// gsapNavCiclo1.to('.navegador_texto', {
//    onStart: function(){
//       document.getElementById('nav_texto').textContent = 'ciclo de vida';
//     },
//     onReverseComplete: function(){
//       document.getElementById('nav_texto').textContent = 'intro';
//     },
// },'<');

