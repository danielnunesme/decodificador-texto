var inputTexto = document.querySelector('#input-texto');
var mensagemCriptH1 = 'A mensagem foi encriptada.';
var mensagemCriptSpan = 'Clique em descriptografar para a mensagem voltar ao normal.';
var mensagemDescripth1 = 'A mensagem foi descriptada.';
var mensagemDescriptSpan = 'Clique em criptografar caso queira encriptá-la novamente.';
var areaTransferencia = 'Texto copiado para área de transferência!';
var erroAreaTrannsferencia = 'Erro ao copiar para a área de transferência: ';
var textoCriptografia;
var mensagemPadraoH1 = 'Nenhuma mensagem encontrada';
var mensagemPadraoSpan = 'Digite um texto que você deseja criptografar.';

inputTexto.addEventListener('input', validarTexto);

function validarTexto() {
    var texto = inputTexto.value;
    document.getElementById("areaTransferencia").innerText = '';
    document.getElementById("mensagemH1").innerText = mensagemPadraoH1;
    document.getElementById("mensagemSpan").innerText = mensagemPadraoSpan;
    document.getElementById('copiar').style.display = 'none';
    
    

    // Expressão regular para verificar se há letras maiúsculas ou caracteres especiais
    var regex = /^[A-Za-z][a-z\s]*$/;
    var botaoCriptografar = document.getElementById('criptografar');
    if (!regex.test(texto)) {
        botaoCriptografar.disabled = true; 
    } else {
        botaoCriptografar.disabled = false;
    }
    botaoCriptografar = document.getElementById('descrip');
    if (!regex.test(texto) || onclick.criptografar()) {
        botaoCriptografar.disabled = true; 
    } else {
        botaoCriptografar.disabled = false;
    }

    inputTexto.addEventListener('paste', function() {
        setTimeout(function() {
            texto = inputTexto.value;
            botaoCriptografar.disabled = !regex.test(texto);
            botaoDescriptografar.disabled = !regex.test(texto);
        }, 0);
    });
    
}

function criptografar() {
    var textoCript = inputTexto.value;
    textoCriptografia  = textoCript.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    inputTexto.value = textoCriptografia;
    document.getElementById("mensagemH1").innerText = mensagemCriptH1;
    document.getElementById("mensagemSpan").innerText = mensagemCriptSpan;
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
      document.getElementById("mensagemH1").innerText = mensagemDescripth1;
      document.getElementById("mensagemSpan").innerText = mensagemDescriptSpan;
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