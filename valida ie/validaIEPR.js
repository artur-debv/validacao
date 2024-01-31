function validaIEPR(inscricao) {

    inscricao = inscricao.replace(/\D/g, '');

    const validainscricao = /^[0-9]{10}$/.test(inscricao);

    if (validainscricao) {

        // primeiro cálculo //
        const pesos = [3, 2, 7, 6, 5, 4, 3, 2];
        let ie = [];

        for (let i = 0; i < 8; i++) {
            ie.push(parseInt(inscricao[i]) * pesos[i]);
        }

        const somaProdutos = ie.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0)

        const resto = somaProdutos % 11;

        let digitoVerificador;

        if (resto === 0 || resto === 1) {
            digitoVerificador = 0;
        } else {
            digitoVerificador = 11 - resto;
        }

        // segundo cálculo
        const pesos2 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        let ie2 = [];

        for (let i = 0; i < 9; i++) {
            ie2.push(parseInt(inscricao[i]) * pesos2[i]);
        }

        const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0)

        const resto2 = somaProdutos2 % 11;

        let digitoVerificador2;

        if (resto2 === 0 || resto2 === 1) {
            digitoVerificador2 = 0;
            
        } else {
            digitoVerificador2 = 11 - resto2;
        }

        if (inscricao[8] == digitoVerificador && inscricao[9] == digitoVerificador2) {
            return true

        } else {
            return false
        }

    } else {
        return false
    }

}

export default validaIEPR

//let inscricao = "123.45678-50";
//console.log(validaIEPR(inscricao))
