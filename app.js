var inputTexto = document.querySelector('#input-texto');
var mensagemCriptH1 = 'A mensagem foi encriptada.';
var mensagemCriptSpan = 'Clique em descriptografar para a mensagem voltar ao normal.';
var mensagemDescripth1 = 'A mensagem foi descriptada.';
var mensagemDescriptSpan = 'Clique em criptografar caso queira encriptá-la novamente.';
var areaTransferencia = 'Texto copiado para área de transferência!';
var erroAreaTrannsferencia = 'Erro ao copiar para a área de transferência: ';
var textoCriptografia;

inputTexto.addEventListener('input', validarTexto);

function validarTexto() {
    var texto = inputTexto.value;
    // Expressão regular para verificar se há letras maiúsculas ou caracteres especiais
    var regex = /[A-Z]|[^a-zA-Z\s]/;
    var botaoCriptografar = document.getElementById('criptografar');
    if (regex.test(texto)) {
        // Se a expressão regular encontrar correspondências, o texto é inválido
        botaoCriptografar.disabled = true; 
    } else {
        // Se não houver correspondências, o texto é válido
        botaoCriptografar.disabled = false;
      
    }
    document.getElementById("areaTransferencia").innerText = '';
}

function criptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    inputTexto.value = textoCriptografia;
    document.getElementById("mensagemH1").innerHTML = mensagemCriptH1;
    document.getElementById("mensagemSpam").innerHTML = mensagemCriptSpan;
    document.getElementById('descrip').removeAttribute('disabled');
    document.getElementById('copiar').style.display = 'block';
    
}

function descriptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      inputTexto.value = textoCriptografia;
      document.getElementById("mensagemH1").innerHTML = mensagemDescripth1;
      document.getElementById("mensagemSpam").innerHTML = mensagemDescriptSpan;
      document.getElementById('descrip').setAttribute('disabled',true);
      
  }

function copiar() {
    const resultText = textoCriptografia;
    navigator.clipboard.writeText(resultText)
    .then(() => {
        document.getElementById("areaTransferencia").innerText = areaTransferencia;
    })
    .catch(err => {
        document.getElementById("areaTransferencia").innerHTML = erroAreaTrannsferencia;
    });
    
}