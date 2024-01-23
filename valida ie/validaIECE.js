let inscricao = "06000001-5";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{9}$/.test(inscricao);

if (validainscricao) {
    const peso = [9, 8, 7, 6, 5, 4, 3, 2];
    const ie = [];

    for (let i = 0; i < 8; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 11;

    let digitoVerificador;
    if (resto === 10 || resto === 11) {
        digitoVerificador = 0;
    } else {
        digitoVerificador = 11 - resto;
    }

    console.log(digitoVerificador)

} else {
   false
}