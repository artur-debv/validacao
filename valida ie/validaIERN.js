function validaIERN() {

  inscricao = inscricao.replace(/\D/g, '');

  if (inscricao.length === 9) {

    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {

      if (inscricao[0] == 2 && inscricao[1] == 0) {

        const peso = [9, 8, 7, 6, 5, 4, 3, 2];
        const ie = [];

        for (let i = 0; i < 8; i++) {
          ie.push(parseInt(inscricao[i]) * peso[i]);
        }

        const somaProdutos = ie.reduce(function (acumulador, valor) {
          return acumulador + valor;
        }, 0);

        const produto = somaProdutos * 10

        const resto = produto % 11;

        if (resto === 10) {
          digitoVerificador = 0;

        } else {
          digitoVerificador = resto;
        }

        if (inscricao[8] == digitoVerificador) {
          return true

        } else {
          return false
        }

      } else {
        return false
      }

    } else {
      return false
    }

  } else if (inscricao.length === 10) {

    const validainscricao = /^[0-9]{10}$/.test(inscricao);

    if (validainscricao) {

      if (inscricao[0] == 2 && inscricao[1] == 0) {

        const peso2 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const ie2 = [];

        for (let i = 0; i < 8; i++) {
          ie2.push(parseInt(inscricao[i]) * peso2[i]);
        }

        const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
          return acumulador + valor;
        }, 0);

        const produto2 = somaProdutos2 * 10;

        const resto2 = produto2 % 11;

        if (resto2 === 10) {
          digitoVerificador = 0;

        } else {
          digitoVerificador = resto2;
        }

        if (inscricao[9] == digitoVerificador) {
          return true

        } else {
          return false
        }

      } else {
        return false
      }

    } else {
      return false
    }

  } else {
    return false
  }

}

//let inscricao = "20.040.040-1";
//let inscricao = "20.0.040.040-0";
//console.log(validaIERN(inscricao))


