var inputTexto = document.querySelector('#input-texto');
exibirMensagemInicial()

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Nenhuma mensagem encontrada.');
    exibirTextoNaTela('span','Digite um texto que você deseja criptografar.');
}

function criptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    exibirTextoNaTela('h1','A mensagem foi encriptada.');
    exibirTextoNaTela('span','Clique em descriptografar para a mensagem voltar ao normal.');
    document.getElementById('output').innerHTML = '<textarea id="texto-secreto" readonly>' + textoCriptografia + '</textarea>' + '<button onclick="copiar()" class="botao-copiar">Copiar</button>';
    console.log(textoCriptografia);
    
}

function descriptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      exibirTextoNaTela('h1','A mensagem foi descriptada.');
      exibirTextoNaTela('span','Clique em criptografar caso queira encriptá-la novamente.');
      return texto
  }



  function limparCampo() {
    document.getElementById('mensagemH1').remove;
    document.getElementById('mensagemSpam').remove;
}