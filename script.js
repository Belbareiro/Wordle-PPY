const palabra = "pieza"
let button= document.getElementById("guess-button")

button.addEventListener("click", intentar)
function intentar(){
    console.log("click")
    let intento = "algo"
}
    
let palabraOculta = "pieza"
let intento = "perro"

if (palabraOculta == intento){
    console.log("ganamos")
} else{
    for (const i in intento){
        comparar(i)
    }
}

function comparar(i){
    if(intento[i]==palabraOculta[i]){
        console.log(intento[i], "verde")
    } else if (palabraOculta.includes(intento[i])){
        console.log(intento[i], "amarillo")
    } else {
        console.log(intento[i], "gris")
    }
}





