const teams = []

function teamsNamesSeed(num){
    for(let i=0; i<num; i++){
        teams.push(
            {
                nome: Math.floor(Math.random()*1_000_000 + 1).toString(36) + " Squad",
                punti: 0,
                falli_subiti: 0
            }
        )
    }
}

teamsNamesSeed(10)

console.log(teams)

const nomeEFalli = teams.map((element) => {
    element.punti = Math.floor(Math.random()*100)
    element.falli_subiti = Math.floor(Math.random()*100)
    return {
        nome: element.nome,
        falli_subiti: element.falli_subiti
    }
})

console.log(teams)
console.log(nomeEFalli)