// Simula salvar em TXT usando download automático
function salvarTXT(nomeArquivo, conteudo) {
    const blob = new Blob([conteudo], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();
}

// Registrar interações do blog
function registrarInteracao(texto) {
    const data = new Date().toLocaleString();
    const registro = `[${data}] - ${texto}\n`;

    salvarTXT("interacoes.txt", registro);
    alert("Interação registrada!");
}

// Captura o formulário de inscrição
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formInscricao");

    if(form){
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = form.nome.value;
            const email = form.email.value;

            const data = new Date().toLocaleString();
            const conteudo = `--- INSCRIÇÃO ---\nNome: ${nome}\nEmail: ${email}\nData: ${data}\n\n`;

            salvarTXT("inscricoes.txt", conteudo);

            document.getElementById("mensagem").innerText =
                "Inscrição registrada com sucesso!";

            form.reset();
        });
    }
});
