const form = document.getElementById("form");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    msg.innerHTML = "";

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;
 
 
    if (nome.length < 3) return erro("Nome inválido");
    if (!email.includes("@")) return erro("Email inválido");
    if (telefone.length < 8) return erro("Telefone inválido");
    if (!cpf) return erro("CPF obrigatório");
    if (cpfsCadastrados.includes(cpf)) return erro("CPF já cadastrado");
    if (idade < 18) return erro("Precisa ser maior de 18");
    if (!cidade) return erro("Cidade obrigatória");
    if (!moradia) return erro("Escolha a moradia");
    if (!quintal) return erro("Informe sobre quintal");
    if (!pet) return erro("Informe se já teve pet");
    if (isNaN(horas)) return erro("Horas inválidas");
    if (motivo.length < 10) return erro("Motivo muito curto");
    if (!termo) return erro("Aceite o termo");



    if (moradia === "apartamento") {
        alert("Verificar se o local permite animais");
    }

    if (moradia === "casa" && quintal === "nao") {
        alert("Casa sem quintal pode não ser adequada");
    }

    if (moradia === "apartamento" && quintal === "sim") {
        return erro("Apartamento não pode ter quintal");
    }

    if (horas > 8) {
        alert("Animal ficará muito tempo sozinho");
    }

    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação");
    }

    if (motivo.toLowerCase() === "quero" || motivo.toLowerCase() === "porque sim") {
        return erro("Motivo genérico não permitido");
    }

    alert("Formulário enviado com sucesso!");

});

function erro(texto) {
    msg.innerHTML = texto;
}
