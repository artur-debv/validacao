
let inscricao = "24006153-6"

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{9}$/.test(inscricao);

if (validainscricao) {
    const peso = [1,2,3,4,5,6,7,8];
    const ie = []


    for (let i = 0; i < 8; i++) {
     ie.push(parseInt(inscricao[i]) * peso[i]);
    }


    const somaProdutos = ie.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 9;

    console.log(resto)
    console.log(somaProdutos)
    console.table(ie2)

} else {
    false
}