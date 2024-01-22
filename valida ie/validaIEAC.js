function validaIEAC() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 12) {
        console.error('A inscrição estadual do Acre deve conter 13 dígitos.');
        return null;
    }

    // primeiro cálculo

    const peso = [4,3,2,9,8,7,6,5,4,3,2];
    const ie = "0100482300112";
    const ie2 = [];


    for (let i = 0; i < 11; i++) {
     ie2.push(parseInt(ie[i]) * peso[i]);
    }


    const somaProdutos1 = ie2.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);

    const resto = somaProdutos1 % 11;


    let digitoVerificador;
    if (resto === 10 || resto === 11) {
     digitoVerificador = 0;
    } else {
     digitoVerificador = 11 - resto;
    }

    console.table(ie2)
    console.log(resto)
    console.log(digitoVerificador)


    // segundo cálculo 

    const peso1 = [5,4,3,2,9,8,7,6,5,4,3,2];
    const ie1 = "010048230011";
    const ie3 = [];

    for (let i = 0; i < 12; i++) {
     ie3.push(parseInt(ie1[i]) * peso1[i]);
    }
  
  
    const somaProdutos2 = ie3.reduce(function (acumulador, valor) {
     return acumulador + valor;
    }, 0);
  
    const resto2 = somaProdutos2 % 11;
  
    let digitoVerificador1;
    if (resto2 === 10 || resto2 === 11) {
     digitoVerificador1 = 0;
     } else {
     digitoVerificador1 = 11 - resto2;
    }

    console.table(ie3)
    console.log(resto2)
    console.log(digitoVerificador1)

    const digitoverificador1 = restoString.charAt(1)
    const digitoverificador2 = restoString.charAt(1)

}

export default validaIEAC