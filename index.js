const prompt = require ('prompt-sync')();

function getHeroName(){
    return prompt('Nome do herói: ')
}

function getExperience(){
    let xp;
    do {
        xp = prompt('Quantidade de experiência do herói: ')
    } while (xp < 0)

    return parseInt(xp)
}
let nome = getHeroName()
let xp = getExperience()

function getNivel(){
    let nivel;
    if (xp <= 1000){
        nivel = 'Ferro'
        return nivel
    }
    if (xp <= 2000){
        nivel = 'Bronze'
        return nivel
    }
    if (xp <= 5000){
        nivel = 'Prata'
        return nivel
    }
    if (xp <= 7000){
        nivel = 'Ouro'
        return nivel
    }
    if (xp <= 8000){
        nivel = 'Plantina'
        return nivel
    }
    if (xp <= 9000){
        nivel = 'Ascendente'
        return nivel
    }
    if (xp <= 10000){
        nivel = 'Imortal'
        return nivel
    }
    if (xp >= 10001){
        nivel = 'Radiante'
        return nivel
    }
}

let nivel = getNivel()

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)