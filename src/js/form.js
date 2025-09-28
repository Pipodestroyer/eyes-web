const botones = document.getElementById('send');
const height = document.getElementById('height-input');
const image = document.getElementById('image-input');

function manage(){
    if(height.value.trim()==='' || image.value.trim()===''){
        botones.disabled = true;
    } else {
        botones.disabled = false;
        console.log("past 1");
    }
}

botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                window.location.href = "index.html";
        }, 1000);
    
});

height.addEventListener('input', manage);
image.addEventListener('input', manage);

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
    botones.disabled = true;
    console.log("loaded");
});