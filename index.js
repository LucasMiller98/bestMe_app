const readline = require('readline-sync')

let username

const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? O que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
  process.stdout.write(`\n\n ${questions[index]} > `)
}

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  
  if(answers.length < questions.length) { // Caso a quantidade de respostas for menor do que a quantidade de perguntas, ele deve passar para próxima pergunta
    ask(answers.length)
  }else{
    username = readline.question('Informe o seu nome, por favor: ').trim()
    console.log(answers)
    process.exit()
  }
  
})

process.on('exit', () => {
  console.log(`
    Bacana, ${username}!
    
    O que você aprendeu hoje foi: ${answers[0]}
    
    O que te aborreceu e você poderia melhora foi: ${answers[1]}
    
    O que te deixoi feliz hoje: ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje!!
    
    Volte amanhã para novas reflexões!
  `)
})