const botones = document.getElementById('send');
const resultado = document.getElementsByClassName('resultado')[0];
const miopia = localStorage.getItem('miopia');

botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                window.location.href = "index.html";
        }, 1000);
    
});



document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');
    resultado.innerHTML = `${miopia}`;
    console.log("loaded");
});