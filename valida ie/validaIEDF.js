let inscricao = '07 300001 001 - 09';

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{13}$/.test(inscricao);

if (validainscricao) {
    // primeiro cálculo //

    const pesos = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let ie = [];


    for (let i = 0; i < 11; i++) {
        ie.push(parseInt(inscricao[i]) * pesos[i]);
    }

    const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0)

    const resto = somaProdutos % 11;
    
    if (resto === 0 || resto === 1) {
        digitoVerificador = 0;
    } else {
        digitoVerificador = 11 - resto;
    }

    console.log(digitoVerificador)


    //segundo cálculo

    const pesos2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let ie2 = [];


    for (let i = 0; i < 12; i++) {
        ie2.push(parseInt(inscricao[i]) * pesos2[i]);
    }

    const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0)

    const resto2 = somaProdutos2 % 11;
    
    if (resto2 === 0 || resto2 === 1) {
        digitoVerificador2 = 0;
    } else {
        digitoVerificador2 = 11 - resto2;
    }

    console.log(digitoVerificador2)
    
} else {
    false
}