//  Interação com a DOM
// let nome = document.getElementById('nome')
// let nome2 = document.getElementsByClassName('texto')
// let nome3 = document.querySelector('.nome')
// const botaozinho = document.querySelector('#envio')

// ! Variaveis de escopo global
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
const mapa = document.querySelector("#mapa");

// ? validação de nome básica
function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}
// ? Validação do campo assunto
function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      "Texto é muito grande, digite no máximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

// ? função de envio básica com validação de preenchimento de campos
function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

//! Validação de E-mail com regex + match
function emailValidate() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(mailformat)) {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  }
}

// ? Efeito de digitação básico
const texts = ["SEJA BEM VINDES!!!"];
let count = 0;
let index = 0;
let currentText = "";
let letters = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
})();
