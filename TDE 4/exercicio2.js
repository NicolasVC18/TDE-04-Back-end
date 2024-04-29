function soma(numero1, numero2, callbackSucesso, callBackError) {
    const resultado = numero1 + numero2;
    if (resultado % 2 === 0) {
        callbackSucesso(resultado);
    } else {
        callBackError(resultado);
    }
}

function callbackSucesso(resultado) {
    console.log("Operação concluída com sucesso. O resultado da soma é par:", resultado);
}

function callBackError(resultado) {
    console.error("Operação falhou. O resultado da soma é ímpar:", resultado);
}

function somaPromise(numero1, numero2) {
    return new Promise((resolve, reject) => {
        soma(numero1, numero2, resolve, reject);
    });
}

somaPromise(5, 3)
    .then(resultado => console.log("Operação concluída com sucesso. O resultado da soma é", resultado % 2 === 0 ? "par" : "ímpar", ":", resultado))
    .catch(resultado => console.error("Operação falhou. O resultado da soma é", resultado % 2 === 0 ? "par" : "ímpar", ":", resultado));

somaPromise(4, 6)
    .then(resultado => console.log("Operação concluída com sucesso. O resultado da soma é", resultado % 2 === 0 ? "par" : "ímpar", ":", resultado))
    .catch(resultado => console.error("Operação falhou. O resultado da soma é", resultado % 2 === 0 ? "par" : "ímpar", ":", resultado));