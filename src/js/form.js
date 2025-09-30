const botones = document.getElementById('send');
const height = document.getElementById('height-input');
const image = document.getElementById('image-input');
const usuario = localStorage.getItem("username");
const referencia = document.querySelector('h2');

function manage(){
    if(height.value.trim()==='' || image.value.trim()===''){
        botones.disabled = true;
    } else {
        botones.disabled = false;
        console.log("past 1");
    }
}

function isNumber(evt,id)
{
    const errorshake=document.getElementById(id);
	try{
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if(charCode==46){
            var txt=document.getElementById(id).value;
            if(!(txt.indexOf(".") > -1)){
	            return true;
            }
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57) ){
            errorshake.classList.add('error');
                setTimeout(function() {
                    errorshake.classList.remove('error');
                }, 300);
            return false;
        }
        return true;
	}catch(w){
		alert(w);
	}
}



botones.addEventListener('click', function() { 
        document.body.classList.add('fade-out');
            document.body.classList.remove('fade-in');
            setTimeout(() =>{
                const miopia = parseFloat(`${image.value}`)/parseFloat(`${height.value}`)
                localStorage.setItem("miopia", `${miopia.toFixed(2)}`)
                window.location.href = "results.html";
        }, 1000);
    
});

height.addEventListener('input', manage);
image.addEventListener('input', manage);

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
    botones.disabled = true;
    referencia.innerHTML = `Estimado ${usuario}, porfavor siga las instrucciones del monitor asignado e ingrese sus resultados.`;
    console.log("loaded");
});