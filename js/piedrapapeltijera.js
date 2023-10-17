function aleatorio(min , max){
    return Math.floor(Math.random() * (max - min + 1)+min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "PIEDRA 👊"
    }else if(jugada == 2) {
        resultado = "PAPEL ✋"
    }else if(jugada == 3) {
        resultado = "TIJERA ✌️"
    }else {
        resultado = "ELEGISTE MAL😅"
    }
    return resultado
}
// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas <3){
    pc = aleatorio(1 , 3)
    jugador = prompt("Elije: 1 para PIEDRA 👊, 2 para PAPEL ✋, 3 para TIJERA ✌️")
    //alert("elegiste " + jugador)

    alert("Elegiste: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))

    //COMBATE
    if(jugador == pc){
        alert("EMPATE 😑")
    }else if(jugador == 1 && pc == 3){
        alert("GANASTE 😎")
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1){
        alert("GANASTE 😎")
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        alert("GANASTE 😎")
        triunfos = triunfos +1
    }else{
        alert("PERDISTE 😅")
        perdidas = perdidas +1
    }
}
    alert("GANASTE " + triunfos + " veces. PERDISTE " + perdidas + " veces.")