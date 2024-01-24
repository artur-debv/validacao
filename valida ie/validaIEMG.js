let inscricao = "062307904008";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{13}$/.test(inscricao);

if (validainscricao) {
    // primeiro Cálculo
    const peso = [3,2,1,1,1,0,9,8,7,6,5,4,3,2];
    const ie = [];
    
    
    for (let i = 0; i < 8; i++) {
      ie.push(parseInt(inscricao[i]) * peso[i]);
    }
    
    
    const somaProdutos1 = ie.reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, 0);
    
    const resto = somaProdutos1 % 11;
    
    let digitoVerificador;
    if (resto <= 1) {
      digitoVerificador = 0;
    } else {
      digitoVerificador = 11 - resto;
    }
    
    console.log(resto)
    console.table(ie)
    console.log(digitoVerificador)
} else {
    false
}