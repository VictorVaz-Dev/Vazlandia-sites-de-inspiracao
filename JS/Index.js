let titulo = document.getElementById('titulo');
let folha = document.getElementById('folha');
let colina1 = document.getElementById('colina1');
let colina4 = document.getElementById('colina4');
let colina5 = document.getElementById('colina5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    titulo.style.marginTop = value * 2.5 + 'px';
    folha.style.top = value * -1.5 + 'px';
    folha.style.left = value * 1.5 + 'px';
    colina5.style.left = value * 1.5 + 'px';
    colina4.style.left = value * -1.5 + 'px';
    colina1.style.top = value * 1.5 + 'px';
});


