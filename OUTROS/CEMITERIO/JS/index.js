let titulo = document.getElementById('titulo');
let arvoreesquerda = document.getElementById('arvore-esquerda');
let arvoredireita = document.getElementById('arvore-direita');
let portaoesquerdo = document.getElementById('portao-esquerdo');
let portaodireito = document.getElementById('portao-direito');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    titulo.style.marginTop = value * 2.5 + 'px'; 
    arvoreesquerda.style.left = value * -1.5 + 'px';
    arvoredireita.style.left = value * 1.5 + 'px';
    portaoesquerdo.style.left = value * 0.35 + 'px';
    portaodireito.style.left = value * -0.35 + 'px';
});