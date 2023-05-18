let estrelas = document.getElementById('estrelas');
let lua = document.getElementById('lua');
let montanhaatras = document.getElementById('montanha-atras');
let titulo = document.getElementById('titulo');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    estrelas.style.left = value * 0.25 + 'px';
    lua.style.top = value * 1.05 + 'px';
    montanhaatras.style.top = value * 0.5 + 'px';
    titulo.style.left = value * -2 + 'px';
});