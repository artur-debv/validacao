function validaIEPE(inscricao) {

  inscricao = inscricao.replace(/\D/g, '');

  const validainscricao = /^[0-9]{9}$/.test(inscricao);

  if (validainscricao) {
    
    // primeiro cálculo
    const peso = [8, 7, 6, 5, 4, 3, 2];
    const ie = [];

    for (let i = 0; i < 7; i++) {
      ie.push(parseInt(inscricao[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);

    const resto = somaProdutos % 11;

    let digitoVerificador;

    if (resto === 0 || resto === 1) {
      digitoVerificador = 0;

    } else {
      digitoVerificador = 11 - resto;
    }

    // segundo cálculo
    const peso2 = [9, 8, 7, 6, 5, 4, 3, 2];
    const ie2 = [];

    for (let i = 0; i < 8; i++) {
      ie2.push(parseInt(inscricao[i]) * peso2[i]);
    }

    const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);

    const resto2 = somaProdutos2 % 11;

    let digitoVerificador2;

    if (resto2 === 0 || resto2 === 1) {
      digitoVerificador2 = 0;

    } else {
      digitoVerificador2 = 11 - resto2;
    }

    if (inscricao[7] == digitoVerificador && inscricao[8] == digitoVerificador2) {
      return true

    } else {
      return false
    }

  } else {
    return false
  }

}

export default validaIEPE

//let inscricao = "0321418-40";
//console.log(validaIEPE(inscricao))
