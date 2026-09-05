/**
 * Valida credenciales de acceso para proyecto-app.
 * @param {string} username Nombre de usuario.
 * @param {string} password Contraseña.
 * @returns {{ok: boolean, message: string}} Resultado de la validación.
 */
function login(username, password) {
  if (!username || !password) {
    return { ok: false, message: "Usuario y contraseña son obligatorios." };
  }
  if (password.length < 6) {
    return { ok: false, message: "La contraseña debe tener al menos 6 caracteres." };
  }
  return { ok: true, message: `Bienvenido, ${username}.` };
}

module.exports = { login };
