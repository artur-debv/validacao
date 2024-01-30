function validaIEMG() {

  inscricao = inscricao.replace(/\D/g, '');

  const validainscricao = /^[0-9]{13}$/.test(inscricao);

  if (validainscricao) {

    // primeiro Cálculo
    const inscricaoSlice = inscricao.slice(0, 3) + "0" + inscricao.slice(3);
    const peso = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    const ie = [];

    for (let i = 0; i < 10; i++) {
      ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce((acumulador, valor) => {
      const digitos = valor.toString().split('').map(Number);
      return acumulador + digitos.reduce((a, b) => a + b, 0);
    }, 0);

    const digitoVerificador = (10 - (somaProdutos % 10)) % 10;

    // segundo Cálculo 
    const peso2 = [3, 2, 1, 1, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie2 = [];

    for (let i = 0; i < 8; i++) {
      ie2.push(parseInt(inscricao[i]) * peso2[i]);
    }

    const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);

    const resto = somaProdutos2 % 11;

    if (resto === 0 || resto === 1) {
      digitoVerificador2 = 0;

    } else {
      digitoVerificador2 = 11 - resto;
    }

    if (inscricao[11] == digitoVerificador && inscricao[12] == digitoVerificador2) {
      return true

    } else {
      return false
    }

  } else {
    return false
  }

}

export default validaIEMG

//let inscricao = "062.307.904/0081";
//console.log(validaIEMG(inscricao))
