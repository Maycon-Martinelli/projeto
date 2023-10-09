// Selecionando elementos HTML e variáveis de validação
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// Event Listener para o campo 'Nome' (keyup)
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    // Se o nome tiver menos de 3 caracteres, exibir mensagem de erro
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    // Caso contrário, exibir o nome normalmente
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

// Event Listener para o campo 'Usuário' (keyup)
usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    // Se o usuário tiver menos de 5 caracteres, exibir mensagem de erro
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    // Caso contrário, exibir o usuário normalmente
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

// Event Listener para o campo 'Senha' (keyup)
senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    // Se a senha tiver menos de 6 caracteres, exibir mensagem de erro
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    // Caso contrário, exibir a senha normalmente
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

// Event Listener para o campo 'Confirmar Senha' (keyup)
confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    // Se as senhas não coincidirem, exibir mensagem de erro
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    // Caso contrário, exibir a confirmação da senha normalmente
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

// Função para cadastrar um usuário
function cadastrar() {
  if(validNome && validUsuario && validSenha && validConfirmSenha) {
    // Se todos os campos estiverem válidos
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    // Exibir mensagem de sucesso
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    // Redirecionar para a página de login após 3 segundos
    setTimeout(() => {
      window.location.href = '../../index.html'
    }, 3000)
  } else {
    // Se algum campo estiver inválido, exibir mensagem de erro
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

// Event Listener para o botão 'Ver Senha'
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')
  
  // Alternar entre tipo 'text' e 'password' para mostrar/ocultar a senha
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// Event Listener para o botão 'Ver Confirmar Senha'
btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  // Alternar entre tipo 'text' e 'password' para mostrar/ocultar a confirmação de senha
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
