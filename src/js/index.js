const botones = document.getElementById('start');
const definput = document.getElementById('default-input');

function manage(){
    if(definput.value.trim()===''){
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

definput.addEventListener('input', manage);

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
    botones.disabled = true;
});