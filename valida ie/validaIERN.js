let inscricao = "20.0.040.040-0";

inscricao = inscricao.replace(/\D/g, '');

if (inscricao.length === 9) {
  const validainscricao = /^[0-9]{9}$/.test(inscricao);
  if (validainscricao) {
    if(inscricao[2] == 2 && inscricao[0] == 0){
       // primeiro cálculo

    const peso = [9,8,7,6,5,4,3,2]; 
    const ie2 = [];


    for (let i = 0; i < 8; i++) {
     ie2.push(parseInt(inscricao[i]) * peso[i]);
    }


    const somaProdutos = ie2.reduce(function (acumulador, valor) {
    return acumulador + valor;
    }, 0);


    const produto = somaProdutos * 10
    const resto = produto % 11;

    let digitoVerificador
    if (resto === 10) {
    digitoVerificador = 0;
    } else {
    digitoVerificador = resto;
    }

    console.log(produto)

  } else {
    console.log("Inscrição inválida");
  }

} else if (inscricao.length === 10) {
  const validainscricao = /^[0-9]{10}$/.test(inscricao);

  if (validainscricao) {

    if(inscricao[2] == 2 && inscricao[0] == 0){
      // segundo cálculo 

    const peso1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie4 = [];
    
    for (let i = 0; i < 8; i++) {
      ie4.push(parseInt(inscricao[i]) * peso1[i]);
    }
    
    const somaProdutos1 = ie4.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);
    
    const produto1 = somaProdutos1 * 10; // Multiplicação da soma total por 10
    const resto1 = produto1 % 11;
    
    let digitoVerificador1;
    if (resto1 === 10) {
      digitoVerificador1 = 0;
    } else {
      digitoVerificador1 = resto1;
    }
    
    console.table(ie4)
    console.log(produto1)

    if(inscricao[8] == digitoVerificador && inscricao[9] == digitoVerificador1){
      // console.log("sim")
      return true
    }else{
      // console.log("não")
      return false
    }

  } else {
    false
  }
    }
    }
} else {
  false
}