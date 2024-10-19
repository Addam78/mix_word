//EMBARALHAR A PALAVRA
let palavra = 'maca'
//SEPARAR A PALAVRA 
var newpalavra = palavra.split('')
console.log(`Palavra original: ${palavra}`)
//ADICIONAR AS LETRAS DE FORMA ALEATORIA DENTRO DA LISTA
var listar_palavra = []

//O PUSH DEVE SER FEITO COM ALGUM NUMERO, NO CASO PEGAR TAMANHO DA STRING E SORTEAR OS NUMEROS
let p =0

//ENQUANTO CONTADOR FOR MENOR QUE TAMANHO DA LISTA, FAÇA
while (p < newpalavra.length) {
    let add = Math.floor(Math.random() * newpalavra.length)
    listar_palavra.push(newpalavra.splice(add,1))
}

console.log(`Palvra embaralhada: ${listar_palavra.toLocaleString().replaceAll(',',' ')}`)

console.log('---------------------')


