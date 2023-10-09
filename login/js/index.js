// Selecionando o botão de "Ver Senha"
let btn = document.querySelector('.fa-eye')

// Event Listener para o botão "Ver Senha"
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')
  
  // Alternar entre tipo 'text' e 'password' para mostrar/ocultar a senha
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// Função para fazer login
function entrar(){
  // Selecionando elementos HTML relevantes
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  
  // Inicialização de variáveis
  let listaUser = []
  
  let userValid = {
    nome: null,
    user: null,
    senha: null
  }
  
  // Recuperando lista de usuários cadastrados do localStorage
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  // Verificando se as credenciais de login correspondem a um usuário válido na lista
  listaUser?.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      // Se as credenciais forem válidas, atualizar o usuário válido
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    // Se as credenciais correspondem a um usuário válido, redirecionar para a página de menu
    
    // Gerar um token de autenticação aleatório (apenas para fins de exemplo)
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    // Armazenar o token de autenticação e informações do usuário logado no localStorage
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    
    // Redirecionar para a página de menu
    window.location.href = 'menu/html/menu.html'
  } else {
    // Se as credenciais não corresponderem a um usuário válido, exibir mensagem de erro
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
}
