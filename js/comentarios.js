// Carregar comentários ao abrir a página
verificarLogin((user) => {
    const area = document.getElementById("areaComentarios");
    const aviso = document.getElementById("avisoLogin");

    if (user) {
        area.style.display = "block";
        aviso.style.display = "none";
        carregarComentarios();
    } else {
        area.style.display = "none";
        aviso.style.display = "block";
    }
});

// Enviar comentário
function enviarComentario() {
    const texto = document.getElementById("comentario").value;
    const user = auth.currentUser;

    if (!user) {
        alert("Você precisa estar logado para comentar.");
        return;
    }

    if (texto.trim() === "") return;

    db.collection("comentarios").add({
        uid: user.uid,
        texto: texto,
        criadoEm: new Date()
    });

    document.getElementById("comentario").value = "";
}

// Carregar comentários do Firestore
function carregarComentarios() {
    db.collection("comentarios").orderBy("criadoEm")
        .onSnapshot(snapshot => {
            const container = document.getElementById("listaComentarios");
            container.innerHTML = "";

            snapshot.forEach(async doc => {
                const c = doc.data();
                const usuario = await buscarUsuario(c.uid);

                container.innerHTML += `
                    <div class="comentario">
                        <p><strong>${usuario.nome}</strong> — ${c.criadoEm.toDate().toLocaleString()}</p>
                        <p>${c.texto}</p>
                    </div>
                `;
            });
        });
}

// Buscar nome do usuário
async function buscarUsuario(uid) {
    const doc = await db.collection("usuarios").doc(uid).get();
    return doc.data();
}
