// 1. Desafio: Conversor de Horários
const conversorHorario = (hora, minuto, segundo) => {
    if (segundo.slice(2) === "PM" && hora === "12") {
        return `00:${minuto}:${segundo.slice(0,2)}`
    } else if (segundo.slice(2) === "PM") {
        return `${Number(hora) + 12}:${minuto}:${segundo.slice(0,2)}`
    }

    return `${hora}:${minuto}:${segundo.slice(0,2)}`
}


// 2. Desafio: Quantidade de Palavras
const quantidadePalavras = frase => {
    const fraseUpperCase = frase.toUpperCase();
    let contadorPalavras = 0;

    for (i = 0; i <= frase.length; i++) {
        if (frase[i] === fraseUpperCase[i]) {
            contadorPalavras++
        }
    }

    return contadorPalavras;
}


// 3. Desafio: Número Solitário
const numeroSolitario = array => {
    const contagemNumeros = [];

    for (numero of array) contagemNumeros[numero] = (contagemNumeros[numero] || 0) + 1;

    return array.filter(numero => contagemNumeros[numero] === 1);
}


// 4. Qual é a saída do código a seguir?
// Resposta: e) 1 1 2 1 2 3 1 2 3 4


// 5. Qual é o resultado da expressão booleana abaixo?
// Resposta: a) true


// 6. Qual o valor da saída do código abaixo?
// Resposta b) 2