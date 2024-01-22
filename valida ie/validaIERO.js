let inscricao = "0000000062521-3";

inscricao = inscricao.replace(/\D/g, '');

if (inscricao.length === 9) {
    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {

    } else {
        console.log("Inscrição inválida");
    }

} else if (inscricao.length === 14) {
    const validainscricao = /^[0-9]{14}$/.test(inscricao);
   
    if (validainscricao) {
        const peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const ie = [];
    
        for (let i = 0; i < 13; i++) {
            ie.push(parseInt(inscricao[i]) * peso[i]);
        }
    
        const somaProdutos = ie.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);
    
        const resto = somaProdutos % 11;
    
        let digitoVerificador;
        if (resto === 10 || resto === 11) {
            digitoVerificador = 0;
        } else {
            digitoVerificador = 11 - resto;
        }
    
        console.table(ie)
        console.log(somaProdutos)
        console.log(resto)
        console.log(digitoVerificador)
    
    } else {
        console.log("Inscrição inválida");
    }

} else {
    console.log("Inscrição inválida");
}
