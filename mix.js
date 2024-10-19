//EMBARALHAR A PALAVRA
let palavra = 'pesca'
//SEPARAR A PALAVRA 
var newpalavra = palavra.split('')
let copy = newpalavra
//ADICIONAR AS LETRAS DE FORMA ALEATORIA DENTRO DA LISTA
var listar_palavra = []

//O PUSH DEVE SER FEITO COM ALGUM NUMERO, NO CASO PEGAR TAMANHO DA STRING E SORTEAR OS NUMEROS
let p =0

//ENQUANTO CONTADOR FOR MENOR QUE TAMANHO DA LISTA, FAÇA
while (p < newpalavra.length) {
   
    let add = Math.floor(Math.random() * copy.length)

    //CRIAR CONDICIONAL PARA NÃO ADICIONAR LETRAS REPETIDAS
    //CONDICIONAL CRIADA , SE A LETRA GERADA PELO ADD JA EXISTIR EM LISTAR PALAVRAS, BLOQUEAR A LETRA DE SER ADIICONADA
    if(listar_palavra.includes(newpalavra[add])){
        console.log(`Localização da new palavra :${newpalavra[add]}`)
        console.log(`Localização da palvra atual :${listar_palavra[add]}`)
        console.log('Ja existe')
        console.log('---------------')
    }else{
        listar_palavra.push(newpalavra[add]) //ADICIONA DE FORMA ALEATORIA
        p++ //ADICIONA VALOR AO CONTADOR
        console.log(listar_palavra)
    }
    
}
console.log(`Palvra embaralhada: ${listar_palavra.toLocaleString().replaceAll(',',' ')}`)

console.log('---------------------')


//Math.floor(Math.random() * newpalavra.length)