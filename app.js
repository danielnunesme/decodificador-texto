let texto = "";
let criptografar = "";
let descriptografar = "";

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHtml= texto;
}