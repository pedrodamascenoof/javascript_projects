function botao() {
    alert("Abrindo o Linkedin de Pedro Damasceno.")
    document.getElementById("Agradecimento").innerHTML = "Projeto por Pedro Damasceno. Seja bem vindo " + nome;
    window.open("https://www.linkedin.com/in/pedrodamascenoof/");
    //window.location.href = "https://www.linkedin.com/in/pedrodamascenoof/" (Para abrir na mesma página)
}

var nome = prompt("Qual a seu nome?")
var idade = prompt("Qual a sua idade?")
while (idade < 18) {
    alert(nome + " é menor de idade.")
    var nome = prompt("Qual a seu nome?")
    var idade = prompt("Qual a sua idade?")

}
