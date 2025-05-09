// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função
  let soma = num1 + num2
  let subtrair = num1 - num2
  let multiplicar = num1 * num2
  let dividir = num1 / num2
  if (operador === "+" && num1 === typeof (Number) && num2 === typeof (Number)) {
    return soma
  }
  else if (operador === "-" && num1 === typeof (Number) && num2 === typeof (Number)) {
    return subtrair
  }
  else if (operador === "*" && num1 === typeof (Number) && num2 === typeof (Number)) {
    return multiplicar
  }
  else if (operador === "/" && num1 === typeof (Number) && num2 === typeof (Number)) {
    return dividir
  }
  else if (num1 !== typeof (Number) || num2 !== typeof (Number)) {
    return "Erro: parâmetros inválidos"
  }
  else if (num2 === 0 && operador == "/") {
    return "Erro: divisão por zero"
  }
  else if (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/") {
    return "Erro: operação inválida"
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };