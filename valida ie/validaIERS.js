let inscricao = "2243658792";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{10}$/.test(inscricao);

if (validainscricao) {
    const peso = [2, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie = [];

    for (let i = 0; i < 9; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
    }

    const somaProdutos1 = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto = somaProdutos1 % 11;

    if (resto === 0 || resto === 1) {
        digitoVerificador = 0;

    } else {
        digitoVerificador = 11 - resto;
    }

    console.log(digitoVerificador)

    if (inscricao[9] == digitoVerificador) {
        //console.log('sim')
        true
    } else {
        //console.log('não')
        false
    }

} else {
    false
}

