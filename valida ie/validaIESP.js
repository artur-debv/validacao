function validaIESP() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 11) {
        console.error('A inscrição estadual de São Paulo deve conter 12 dígitos.');
        return null;
    }

    if(inscricao.lenght == 12){

         const digitoverificador = restoString.charAt(1)

     
         if(ie[8] == digitoverificador  ){
        return true
     }else{
       return false
     }


         if(ie[4] == digitoverificador  ){
            return true
          }else{
       return false
     }

         
         // primeiro cálculo //

const pesos1 = [1, 3, 4, 5, 6, 7, 8, 10];

let ie = "110042490114";
let ie2 = [];

for (let i = 0; i < 8; i++) {
  ie2.push(parseInt(ie[i], 10) * pesos1[i]);
}

console.table(ie2);

const somaProdutos1 = ie2.reduce(function (acumulador,valor)
  return acumulador + valor;
}, 0);

const resto = somaProdutos1 % 11;

const restoString = resto.toString()

console.log(restoString.charAt(1));


// segundo cálculo

let ie3 = [];

const pesos2 = [3,2,10,9,8,7,6,5,4,3,2];

for (let i = 0; i < 11; i++) {
  ie3.push(parseInt(ie[i], 10) * pesos2[i]);
}

const somaProdutosb = ie3.reduce(function (acumulador, valor)
  return acumulador + valor;
}, 0);

const resto2 = somaProdutosb % 11;

const restoString1 = resto2.toString()

console.log(restoString1)
         
    }

}else if(isncricao.lenght == 13){

 // terceiro cálculo  //

const pesos3 = [1,3,4,5,6,7,8,10];

let ieb = "01100424";
let ie4 = [];

for (let i = 0; i < 8; i++) {
  ie4.push(parseInt(ieb[i], 8) * pesos3[i]);
}

console.table(ie4);

const somaProdutosc = ie4.reduce(function (acumulador, valor) {
  return acumulador + valor;
}, 0);

const resto3 = somaProdutosc % 11;

const restoString3 = resto3.toString()

console.log(restoString3)

}else{
  return false        
}
     

export default validaIESP
