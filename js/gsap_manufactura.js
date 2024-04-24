const man1_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man1_1',  
    start: 'top center', 
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man1_1.to('.man1_titulo', {
  top:'10%'
},);

const man1_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man1_2',  
    start: 'top center',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man1_2.to('.man1_texto', {
  bottom:'25%'
},);

const man2_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man2_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man2_1.to('.man2_fondo_verde', {
  opacity:'1'
},);


const man2_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man2_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man2_2.to('.man2_texto', {
  bottom:'15%'
},);

const man3_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_1.to('.man3_mano1, .man3_mano1_azul', {
  right:0
},);
man3_1.to('.man3_mano2', {
  top:'-20%'
});


const man3_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_2.to('.man3_texto1', {
  top:'30%'
},);


const man3_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_3',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_3.to('.man3_texto2', {
  bottom:'25%'
});
man3_3.to('.man3_mano1_azul', {
  opacity:1
},'<');
