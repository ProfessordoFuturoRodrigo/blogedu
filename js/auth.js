// Criar usuário
async function registrar(nome, email, senha) {
    const cred = await auth.createUserWithEmailAndPassword(email, senha);
    await db.collection("usuarios").doc(cred.user.uid).set({
        nome, email, role: "usuario"
    });
}

// Login
async function login(email, senha) {
    await auth.signInWithEmailAndPassword(email, senha);
}

// Logout
function logout() {
    auth.signOut();
}
