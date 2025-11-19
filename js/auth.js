// CADASTRO
function registrarUsuario(nome, email, senha) {
    auth.createUserWithEmailAndPassword(email, senha)
        .then(cred => {
            const uid = cred.user.uid;

            // Salvar dados extras no Firestore
            return db.collection("usuarios").doc(uid).set({
                nome: nome,
                email: email,
                criadoEm: new Date()
            });
        })
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        })
        .catch(err => alert(err.message));
}

// LOGIN
function login(email, senha) {
    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(err => alert("Erro: " + err.message));
}

// LOGOUT
function logout() {
    auth.signOut().then(() => window.location.reload());
}

// VERIFICAR LOGIN
function verificarLogin(callback) {
    auth.onAuthStateChanged(user => {
        callback(user);
    });
}
