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

soma(5, 3, callbackSucesso, callBackError);
soma(4, 6, callbackSucesso, callBackError);
