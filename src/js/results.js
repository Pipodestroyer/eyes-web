const botones = document.getElementById('send');
const resultado = document.getElementsByClassName('resultado')[0];
const referencia = document.querySelector('h2');
const miopia = localStorage.getItem('miopia');
const usuario = localStorage.getItem('username');

botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                window.location.href = "index.html";
        }, 1000);
    
});



document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');
    referencia.innerHTML = `Estimado ${usuario}, los resultados de su prueba ya estan listos.`;
    resultado.innerHTML = `${miopia}`;
    console.log("loaded");
});