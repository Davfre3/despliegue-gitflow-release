const test = require("node:test");
const assert = require("node:assert");
const { login } = require("../src/login");

test("rechaza login sin usuario o contraseña", () => {
  const result = login("", "");
  assert.strictEqual(result.ok, false);
});

test("rechaza contraseña muy corta", () => {
  const result = login("david", "123");
  assert.strictEqual(result.ok, false);
});

test("acepta credenciales válidas", () => {
  const result = login("david", "clave123");
  assert.strictEqual(result.ok, true);
  assert.match(result.message, /Bienvenido, david/);
});
