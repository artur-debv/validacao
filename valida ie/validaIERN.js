
let inscricao = "20040040";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{9}$/.test(inscricao);

if (validainscricao) {
    // primeiro cálculo

    const peso = [9,8,7,6,5,4,3,2]; 
    const ie2 = [];


    for (let i = 0; i < 8; i++) {
     ie2.push(parseInt(ie[i]) * peso[i]);
    }


    const somaProdutos = ie2.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);


    const produto = somaProdutos * 10
    const resto = produto % 11;

    let digitoVerificador
    if (resto === 10) {
    digitoVerificador = 0;
    } else {
    digitoVerificador = resto;
    }

    console.log(produto)
    console.log(resto)
    console.table(ie2)


    // segundo cálculo 


    const peso1 = [10, 9,8,7,6,5,4,3,2]; 
    const ie4 = [];


    for (let i = 0; i < 8; i++) {
    ie4.push(parseInt(ie3[i]) * peso1[i]);
    }


    const somaProdutos1 = ie4.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);


    const produto1 = somaProdutos1 * 10
    const resto1 = produto1 % 11;

    let digitoVerificador1
    if (resto1 === 10) {
     digitoVerificador1 = 0;
    } else {
        digitoVerificador1 = resto1;
    }

    console.log(produto1)
    console.log(resto1)
    console.table(ie2)

} else {
    false
}