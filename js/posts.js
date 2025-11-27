// Carregar lista de posts
function carregarPosts() {
    const container = document.getElementById("postsLista");

    db.collection("posts")
        .orderBy("data", "desc")
        .onSnapshot(snapshot => {
            container.innerHTML = "";
            snapshot.forEach(doc => {
                const p = doc.data();
                container.innerHTML += `
                    <div class="post-card">
                        <h2>${p.titulo}</h2>
                        <p>${p.resumo}</p>
                        <a href="post.html?id=${doc.id}">Ler mais</a>
                    </div>
                `;
            });
        });
}

// Carregar post individual
function carregarPost() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    db.collection("posts").doc(id).onSnapshot(doc => {
        const p = doc.data();
        document.getElementById("titulo").innerText = p.titulo;
        document.getElementById("conteudo").innerHTML = p.conteudo;
        document.getElementById("likes").innerText = p.likes ?? 0;
    });
}

// Like
async function darLike() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const ref = db.collection("posts").doc(id);
    await ref.update({ likes: firebase.firestore.FieldValue.increment(1) });
}
