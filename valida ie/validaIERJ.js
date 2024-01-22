let inscricao = "99.999.99-3";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{8}$/.test(inscricao);

if (validainscricao) {
    const peso = [2, 7, 6, 5, 4, 3, 2];
    const ie = [];

    for (let i = 0; i < 7; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 11;

    let digitoVerificador;
    if (resto <= 1) {
        digitoVerificador = 0;
    } else {
        digitoVerificador = 11 - resto;
    }

    console.table(ie)
    console.log(somaProdutos)
    console.log(resto)
    console.log(digitoVerificador)

} else {
    console.log("Inscrição inválida");
}