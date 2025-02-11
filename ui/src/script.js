document.getElementById('cadastro-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const confirmacaoEmail = document.getElementById('confirmacao-email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = "";
    mensagem.style.display = "block";

    if (!nome || !email || !confirmacaoEmail || !senha) {
        mensagem.textContent = "Todos os campos são obrigatórios!";
        mensagem.style.color = "red";
        return;
    }

    if (email !== confirmacaoEmail) {
        mensagem.textContent = "Os e-mails não coincidem!";
        mensagem.style.color = "red";
        return;
    }

    if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(senha)) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula e 1 número.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
});