export function math() {
  function sum(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function div(a, b) {
    return b !== 0
      ? a / b
      : 'Erro: divisão por zero';
  }

  function pi() {
    return Math.PI;
  }

  function pot(a, b) {
    return Math.pow(a, b);
  }

  function rdc(a) {
    return Math.trunc(a);
  }

  function rd(a, b) {
    return Math.floor(Math.random() * a) + b;
  }

  return { sum, sub, mult, div, pi, pot, rdc, rd >
}

