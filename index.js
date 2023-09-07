const objeto = {
    nome: 'Yago',
    idade: 19,
    email: 'yagohoc@gmail.com'

}

console.log(objeto.idade)
console.log(objeto['email']) //equivalente a objeto.email

objeto['email'] = 'macacoprego@gmail.com'
console.log(objeto.email)

document.write(objeto.idade) //mostra na tela


const oCavaleiroDasTrevas = {
    diretor: 'Christopher Nolan',
    nome: 'O cavaleiro das trevas',
    ano: 2008,
    elenco: ['Christian Bale','Heath Ledger','Michael Caine','Morgan Freeman'],
    visto: true,
}

oCavaleiroDasTrevas.personagens = ['Batman','Coringa','Alfred','Lucius Fox']

console.log(oCavaleiroDasTrevas.elenco[0]+ ' é ' +oCavaleiroDasTrevas.personagens[0])
console.log(oCavaleiroDasTrevas.elenco[1]+ ' é ' +oCavaleiroDasTrevas.personagens[1])
console.log(oCavaleiroDasTrevas.elenco[2]+ ' é ' +oCavaleiroDasTrevas.personagens[2])
console.log(oCavaleiroDasTrevas.elenco[3]+ ' é ' +oCavaleiroDasTrevas.personagens[3])

oCavaleiroDasTrevas.elenco[0] = 'Xuxa'

console.log(oCavaleiroDasTrevas)

console.log(oCavaleiroDasTrevas.diretor)
console.log(oCavaleiroDasTrevas.nome)
console.log(oCavaleiroDasTrevas.ano)
console.log(oCavaleiroDasTrevas['elenco'])
console.log(oCavaleiroDasTrevas['visto'])

const pessoa = {
    nome: 'Yago',
    idade: 19,
    generoMusical: 'rap',

}


console.log('O seu nome é '+pessoa.nome)
console.log('Você tem '+pessoa.idade+' anos de idade')
console.log('Seu gênero musical favorito é '+pessoa.generoMusical)


const donoDoPet = {
    nome: 'Yago',
    pet: {
    nomeDoPet: 'Bruce',
    raca: 'gato doido',
    idade: '2'


    }
}


console.log(donoDoPet.pet.nomeDoPet)


const curso = {
    nome: 'Noturno Frontend',
    linguagens: ['JS','CSS','HTML']
}

console.log(curso.linguagens[0])

curso.numeroEstudantes = 50 //add uma propriedade

console.log(curso.numeroEstudantes)

const professores = [
    {nome: 'Andrei', modulo: 1},
    {nome: 'Vitor', modulo: 2},
    {nome: 'Mina', modulo: 3}
]

console.log(professores[1].nome)

const usuario = {
    nome: 'Yago',
    idade: 19,
    email: 'yagohoc@gmail.com'
}

const novoUsuario = {
    ...usuario,
    nome: 'Douglas',
    idade:29
}


console.log(usuario)
console.log(novoUsuario)

 //copiar array tambem se usa ...

 const arraylista = [19,29,193,138]
 const copiaArray = [...arraylista]




function minhaFuncao(){
    const usuario = {
        nome: 'Yago',
        idade: 19,
        email: 'yagohoc@gmail.com'
    }
    usuario.comidas = ['Pizza','Hamburguer','Banana']
    usuario.objeto = {
        nome:'Jonas',
        idade: 20
    }
    return console.log('O nome da pessoa é '+usuario.nome+' suas comidas favoritas são: '+usuario.comidas[0]+', '+usuario.comidas[1]+' e '+usuario.comidas[2]+'. Seu melhor amigo se chama '+usuario.objeto.nome+' e tem '+usuario.objeto.idade+' anos de idade')

}

minhaFuncao()