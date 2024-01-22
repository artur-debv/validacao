function validaIEPE() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8) {
        console.error('A inscrição estadual de Pernambuco  deve conter 9 dígitos.');
        return null;
    }

    // primeiro cálculo

    const peso = [8,7,6,5,4,3,2];
    const ie = "0321418";
    const ie2 = [];


    for (let i = 0; i < 7; i++) {
    ie2.push(parseInt(ie[i]) * peso[i]);
    }


    const somaProdutos1 = ie2.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);

    const resto1 = somaProdutos1 % 11;

    let digitoVerificador1;
    if (resto1 === 0 || resto1 === 1) {
     digitoVerificador1 = 0;
    } else {
  digitoVerificador1 = 11 - resto1;
    }

    console.log(digitoVerificador1)
    console.table(ie2)
    console.log(resto1)


    // segundo cálculo
    const peso1 = [9, 8, 7, 6, 5, 4, 3, 2];
    const ie1 = "03214184";
    const ie3 = [];

    for (let i = 0; i < 8; i++) {
    ie3.push(parseInt(ie1[i]) * peso1[i]);
    }

    const somaProdutos2 = ie3.reduce(function (acumulador, valor) {
     return acumulador + valor;
    }, 0);

    const resto2 = somaProdutos2 % 11;

    let digitoVerificador2;
    if (resto2 === 0 || resto2 === 1) {
    digitoVerificador2 = 0;
    } else {
    digitoVerificador2 = 11 - resto2;
    }

    console.log(digitoVerificador2);
    console.table(ie2);
    console.log(resto2);

}

export default validaIEPE