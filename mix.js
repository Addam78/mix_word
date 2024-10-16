//EMBARALHAR A PALAVRA
let palavra = 'materiais'

//SEPARAR A PALAVRA 
var newpalavra = palavra.split('')

//ADICIONAR AS LETRAS DE FORMA ALEATORIA DENTRO DA LISTA
var listar_palavra = []

//O PUSH DEVE SER FEITO COM ALGUM NUMERO, NO CASO PEGAR TAMANHO DA STRING E SORTEAR OS NUMEROS
let p =0

//ENQUANTO CONTADOR FOR MENOR QUE TAMANHO DA LISTA, FAÇA
while (p < newpalavra.length) {
    p++ //ADICIONA VALOR AO CONTADOR
    let add = Math.floor(Math.random() * newpalavra.length)
    listar_palavra.push(newpalavra[add]) //ADICIONA DE FORMA ALEATORIA 

    //CRIAR CONDICIONAL PARA NÃO ADICIONAR LETRAS REPETIDAS
  
}
console.log(listar_palavra.toLocaleString().replaceAll(',',' '))
