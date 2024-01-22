function validaIERS() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 9) {
        console.error('A inscrição estadual do Rio Grande do Sul deve conter 10 dígitos.');
        return null;
    }

    const peso = [2, 9, 8, 7, 6, 5, 4, 3, 2];
    const ie = "2243658792";
    const ie2 = [];

    
    for (let i = 0; i < 9; i++) {
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
    console.log(digitoVerificador)

    const digitoverificador = resto.charAt(1)
   
    if(ie[9]== digitoverificador){
        return true
    }else{
        return false
    }

}

export default validaIERS