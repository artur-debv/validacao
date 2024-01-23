
let inscricao = "2400000-4"

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{9}$/.test(inscricao);

if (validainscricao) {
    const peso = [9,8,7,6,5,4,3,2];
    const ie = []
    
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
    
      console.table(ie2)
      console.log(produto)
      console.log(resto)

      if(ie[8] == digitoVerificador){
        return true
      }else{
        return false
      }
    
} else {
    false
}