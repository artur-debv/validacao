function validaIETO(inscricao) {

  inscricao = inscricao.replace(/\D/g, '');

  const validainscricao = /^[0-9]{11}$/.test(inscricao);

  if (validainscricao) {

    let inscricaoSlice = inscricao.slice(0, 2) + inscricao.slice(4, 10);

    const peso = [9, 8, 7, 6, 5, 4, 3, 2];

    const ie = [];

    for (let i = 0; i < 8; i++) {
      ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
    }

    const somaProdutos = ie.reduce((acumulador, valor) => acumulador + valor, 0);

    const resto = somaProdutos % 11;

    let digitoVerificador;
    
    if (resto < 2) {
      digitoVerificador = 0;

    } else {
      digitoVerificador = 11 - resto;
    }

    if (inscricao[10] == digitoVerificador) {
      return true

    } else {
      return false
    }

  } else {
    return false
  }

}

export default validaIETO

//let inscricao = "29010227836";
//console.log(validaIETO(inscricao))
