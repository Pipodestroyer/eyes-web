const botones = document.getElementById('send');

botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                window.location.href = "index.html";
        }, 1000);
    
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
    console.log("loaded");
});