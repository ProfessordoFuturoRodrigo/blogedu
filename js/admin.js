// Criar post
async function criarPost() {
    const t = document.getElementById("titulo").value;
    const r = document.getElementById("resumo").value;
    const c = document.getElementById("conteudo").value;

    await db.collection("posts").add({
        titulo: t,
        resumo: r,
        conteudo: c,
        data: new Date(),
        likes: 0,
        aprovado: false
    });

    alert("Post enviado para moderação!");
}

// Listar posts pendentes
function listarModeracao() {
    const box = document.getElementById("listaModeracao");

    db.collection("posts")
        .where("aprovado", "==", false)
        .onSnapshot(snap => {
            box.innerHTML = "";
            snap.forEach(doc => {
                const p = doc.data();

                box.innerHTML += `
                    <div class="post-card">
                        <h3>${p.titulo}</h3>
                        <button onclick="aprovar('${doc.id}')">Aprovar</button>
                        <button onclick="excluir('${doc.id}')">Excluir</button>
                    </div>
                `;
            });
        });
}

// Aprovar
async function aprovar(id) {
    await db.collection("posts").doc(id).update({ aprovado: true });
}

// Excluir
async function excluir(id) {
    await db.collection("posts").doc(id).delete();
}
