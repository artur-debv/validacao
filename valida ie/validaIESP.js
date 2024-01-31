function validaIESP(inscricao) {

  function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return reversedString; 
    //return parseInt(reversedString) * Math.sign(num);
  }

  inscricao = inscricao.replace(/[^0-9pP]/g, '');

  if (inscricao.length === 12) {

    const validainscricao = /^[0-9]{12}$/.test(inscricao);

    if (validainscricao) {

      // primeiro cálculo //
      const pesos = [1, 3, 4, 5, 6, 7, 8, 10];
      let ie = [];


      for (let i = 0; i < 8; i++) {
        ie.push(parseInt(inscricao[i]) * pesos[i]);
      }

      const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
      }, 0)

      const resto = somaProdutos % 11;

      const invertedNumber = reverseNumber(resto);

      const digitoVerificador = invertedNumber[0];

      // segundo cálculo
      const pesos2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      let ie2 = [];


      for (let i = 0; i < 11; i++) {
        ie2.push(parseInt(inscricao[i], 10) * pesos2[i]);
      }

      const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
        return acumulador + valor;
      }, 0)

      const resto2 = somaProdutos2 % 11;

      const invertedNumber2 = reverseNumber(resto2);

      const digitoVerificador2 = invertedNumber2[0];

      if (inscricao[8] == digitoVerificador && inscricao[4] == digitoVerificador2) {
        return true

      } else {
        return false
      }

    } else {
      return false
    }

  } else if (inscricao.length === 13) {

    const validainscricao = /^[pP]?[0-9]{12}$/.test(inscricao);

    if (validainscricao) {
      inscricao = inscricao.replace(/[^0-9]/g, '');

      const pesos = [1, 3, 4, 5, 6, 7, 8, 10];
      let ie = [];

      for (let i = 0; i < 8; i++) {
        ie.push(parseInt(inscricao[i]) * pesos[i]);
      }

      const somaProdutos = ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
      }, 0);

      const resto = somaProdutos % 11;

      const invertedNumber = reverseNumber(resto);

      const digitoVerificador = invertedNumber[0];

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

}

export default validaIESP

//let inscricao = "110.042.490.114";
//let inscricao = "P-01100424.3/002";
//console.log(validaIESP(inscricao))