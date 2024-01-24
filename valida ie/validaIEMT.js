
let inscricao = "0013000001-9"

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{11}$/.test(inscricao);

if (validainscricao) {

    const peso = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie = [];


    for (let i = 0; i < 10; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
    }


    const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 11;

    if (resto === 0 || resto === 1) {
        digitoVerificador = 0;
    } else {
        digitoVerificador = 11 - resto;
    }

    if (inscricao[10] == digitoVerificador) {
        //console.log('sim')
        true
    } else {
        //console.log('não')
        false
    }

} else {
    false
}