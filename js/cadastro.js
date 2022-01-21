window.document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault
    salvarcadastro()
})

var salvarcadastro = function () {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    console.log('nome', nome);
    console.log('sobrenome', sobrenome);
    console.log('rg', rg);
    console.log('cpf', cpf);
    console.log('email', email);
    console.log('senha', senha);
};