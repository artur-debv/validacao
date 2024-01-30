function validaIEAP() {

  inscricao = inscricao.replace(/\D/g, '');

  const validainscricao = /^[0-9]{9}$/.test(inscricao);

  if (validainscricao) {

    if (inscricao[0] == 0 && inscricao[1] == 3) {
      const peso = [9, 8, 7, 6, 5, 4, 3, 2];
      const ie = []

      for (let i = 0; i < 8; i++) {
        ie.push(parseInt(inscricao[i]) * peso[i]);
      }

      if (inscricao >= "03000001" && inscricao <= "03017000") {
        P = 5;
        D = 0;

      } else if (inscricao >= "03017001" && inscricao <= "03019022") {
        P = 9;
        D = 1;

      } else if (inscricao <= '0319023') {
        P = 0;
        D = 0;
      }

      const somaProdutos = P + ie.reduce(function (acumulador, valor) {
        return acumulador + valor;
      }, 0);

      const resto = somaProdutos % 11;

      digitoVerificador = 11 - resto;

      if (digitoVerificador === 10) {
        digitoVerificador = 0;
        
      } else if (digitoVerificador === 11) {
        digitoVerificador = D;
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

}

//let inscricao = "030123459";
//console.log(validaIEAP(inscricao))
