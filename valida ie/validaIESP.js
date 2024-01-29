let inscricao = "110.042.490.114";

inscricao = inscricao.replace(/\D/g, '');

if (inscricao.length === 12) {
  const validainscricao = /^[0-9]{12}$/.test(inscricao);

  if (validainscricao) {
    // primeiro cálculo //

    const pesos1 = [1, 3, 4, 5, 6, 7, 8, 10];

    let ie = [];


    for (let i = 0; i < 8; i++) {
      ie.push(parseInt(inscricao[i]) * pesos1[i]);
    }

    console.table(ie);

    const somaProdutos1 = ie.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0)

    const resto = somaProdutos1 % 11;

    const restoString = resto.toString()

    console.log(restoString.charAt(1));


    // segundo cálculo

    let ie2 = [];

    const pesos2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 11; i++) {
      ie2.push(parseInt(inscricao[i], 10) * pesos2[i]);
    }

    const somaProdutosb = ie2.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0)

    const resto2 = somaProdutosb % 11;

    const restoString1 = resto2.toString()

    console.log(restoString1)


    const digitoverificador1 = resto[1]
    const digitoverificador2 = resto[1]

    if (ie[8] == digitoverificador1 && ie[4] == digitoverificador2) {
      return true
    } else {
      return false
    }

  } else {
    console.log("Inscrição inválida");
  }

} else if (inscricao.length === 13) {
  const validainscricao = /^[0-9]{13}$/.test(inscricao);

  if (validainscricao) {
    // primeiro cálculo  //

    const pesos3 = [1, 3, 4, 5, 6, 7, 8, 10];

    
    let ie3 = [];

    for (let i = 0; i < 8; i++) {
      ie3.push(parseInt(inscricao[i]) * pesos3[i]);
    }

    console.table(ie3);

    const somaProdutosc = ie3.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);

    const resto3 = somaProdutosc % 11;

    const restoString3 = resto3.toString()

    console.log(restoString3)

    const digitoverificador3 = resto3.charAt(1)


    if (ie[8] == digitoverificador3) {
      return true
    } else {
      return false
    }

  } else {
    false
  }

} else {
  false
}
