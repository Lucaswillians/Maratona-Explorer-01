const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector ("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza!",
  "É decidamente assim.",
  "Não conte com isso!",
  "Sem dúvidas.",
  "Pergunte novamente mais tarde.",
  "SIM!",
  "Minha resposta é nao.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Ao meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever isso agora.",
  "As perspectivas não são tão boas assim.",
  "Sinais apontam que sim.",
  "Em breve saberá.",
  "Me pergunte algo sobre seu futuro, não algo ja existente.",
  "Talvez.",
  "Com toda certeza.",
]

// Clicar em fazer pergunta
function fazerPergunta() {

  if (inputPergunta.value == "") { alert("Digite sua pergunta!")
  return 
  }
  
  buttonPerguntar.setAttribute ("disabled", true)


  const pergunta = "<div>" + inputPergunta.value + "</div>"

// Gerar número aleatório
const totalRespostas = respostas.length 
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity =1;

// Sumir a resposta depois de 3s (há opacidade no CSS)
setTimeout(function() {elementoResposta.style.opacity =0;buttonPerguntar.removeAttribute("disabled")}, 3000)

}

