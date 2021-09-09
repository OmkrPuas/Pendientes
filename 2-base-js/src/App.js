const vacuna = document.querySelector("#vacuna-input");
const dosis = document.querySelector("#dosis-input");
const fecha = document.querySelector("#fecha-input");
const form=document.querySelector("#vacunas-form");


form.addEventListener("submit", (event) =>{
    alert("Se ha registrado la vacuna "+vacuna.value+ " ,con la "+dosis.value+" ,en la fecha "+fecha.value);
})