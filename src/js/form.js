const botones = document.getElementById('start');
const height = document.getElementById('height-input');
const image = document.getElementById('image-input');

function manage(){
    if(height.value.trim()==='' || image.value.trim()===''){
        botones.disabled = true;
    } else {
        botones.disabled = false;
    }
}

botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                window.location.href = "test.html";
        }, 1000);
    
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
    botones.disabled = true;
});