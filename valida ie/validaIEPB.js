function validaIEPB() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8) {
        console.error('A inscrição estadual da Paraíba  deve conter 9 dígitos.');
        return null;
    }

    const peso = [9,8,7,6,5,4,3,2];
    const ie = "060000015";
    const ie2 = [];



  for (let i = 0; i < 8; i++) {
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
  console.log(resto)

  const digitoverificador1 = restoString.charAt(1)
  
  
}
export default validaIEPB
