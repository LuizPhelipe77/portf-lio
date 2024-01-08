
window.revelar = ScrollReveal({reset:true})

//topo do site/
revelar.reveal('.efeito-txt-topo', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img-topo', {
    duration: 2000,
    distance: '90px',
    delay:500
})

//titulos

revelar.reveal('.titulo', {
    duration: 2000,
    distance: '90px'
})

//sessao especialidades

revelar.reveal('.efeito-esp1', {
    duration: 2000,
    distance: '90px',
    delay:1500
})


revelar.reveal('.efeito-esp2', {
    duration: 2000,
    distance: '90px',
    delay:2000 
})

//sobre

revelar.reveal('.efeito-img-sobre', {
    duration: 2000,
    distance: '90px',
    delay:500,
    origin:'left'     
})

revelar.reveal('.efeito-txt-sobre', {
    duration: 2000,
    distance: '90px',
    delay:700,
    origin:'right'    
})

//portfolio
revelar.reveal('.efeito-port1', {
    duration: 2000,
    distance: '90px',
    delay:500,
    origin:'top'
})

revelar.reveal('.efeito-port2', {
    duration: 2000,
    distance: '90px',
    delay:500,
    origin:'bottom'
})

revelar.reveal('.efeito-port3', {
    duration: 2000,
    distance: '90px',
    delay:500,
    origin:'top'
})
