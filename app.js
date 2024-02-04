var inputTexto = document.querySelector('#input-texto');
var mensagemCriptH1 = 'A mensagem foi encriptada.';
var mensagemCriptSpan = 'Clique em descriptografar para a mensagem voltar ao normal.';
var mensagemDescripth1 = 'A mensagem foi descriptada.';
var mensagemDescriptSpan = 'Clique em criptografar caso queira encriptá-la novamente.'


function criptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = '<textarea id="texto-secreto" readonly>' + textoCriptografia + '</textarea>' + '<button onclick="copiar()" class="botao-copiar">Copiar</button>';
    document.getElementById("mensagemH1").innerHTML = mensagemCriptH1;
    document.getElementById("mensagemSpam").innerHTML = mensagemCriptSpan;
    document.getElementById('descrip').removeAttribute('disabled');
}

function descriptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      document.getElementById('output').innerHTML = '<textarea id="texto-secreto" readonly>' + textoCriptografia + '</textarea>' + '<button onclick="copiar()" class="botao-copiar">Copiar</button>';
      document.getElementById("mensagemH1").innerHTML = mensagemDescriptH1;
      document.getElementById("mensagemSpam").innerHTML = mensagemDescriptSpan;
      document.getElementById('descrip').setAttribute('disabled',true);
  }

function copiar() {
    const resultText = textoCriptografia;
    navigator.clipboard.writeText(resultText)
    .then(()=> {
        alert("Texto copiado para área de transferência!")
    })
    .catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
    
}