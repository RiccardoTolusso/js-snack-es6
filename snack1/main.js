'use strict'

const Settings = {
    'minimum-weight': 10
}

const bicicles = [

]

function bicicleSeed(num){
    for(let i=0; i<num; i++){
        bicicles.push(
            {
                nome: "Model_"+Math.floor(Math.random()*1_000_000 + 1).toString(36),
                peso: Math.floor(Math.random()*100 + Settings['minimum-weight'])
            }
        )
    }
}

// genero i valori delle biciclette
bicicleSeed(1000)

let lighter = bicicles[0]
bicicles.forEach((element) => {
    if(element.peso < lighter.peso){
        lighter = element;
    }
})

console.log(`La bici più leggera è il modello: ${lighter.nome} con un peso di: ${lighter.peso} Kg`)