// Salvar usuário no localStorage
function registrarUsuario(nome, email, senha) {
    const usuario = { nome, email, senha };
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
}

// Login
function login(email, senha) {
    const usuario = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (!usuario) return false;

    if (usuario.email === email && usuario.senha === senha) {
        localStorage.setItem("usuarioLogado", "true");
        return true;
    }

    return false;
}

// Verificar se está logado
function estaLogado() {
    return localStorage.getItem("usuarioLogado") === "true";
}

// Logout
function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
}
