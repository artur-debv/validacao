let inscricao = "01.004.823/001-12";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{13}$/.test(inscricao);

if (validainscricao) {
    // primeiro cálculo

    const peso = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie = [];

    for (let i = 0; i < 11; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 11;

    if (resto === 10 || resto === 11) {
        digitoVerificador1 = 0;

    } else {
        digitoVerificador1 = 11 - resto;
    }

    console.log(digitoVerificador1)

    // segundo cálculo 

    const peso2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie2 = [];

    for (let i = 0; i < 12; i++) {
        ie2.push(parseInt(inscricao[i]) * peso2[i]);
    }

    const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto2 = somaProdutos2 % 11;

    if (resto2 === 10 || resto2 === 11) {
        digitoVerificador2 = 0;

    } else {
        digitoVerificador2 = 11 - resto2;
    }

    console.log(digitoVerificador2)

} else {
    false
}
