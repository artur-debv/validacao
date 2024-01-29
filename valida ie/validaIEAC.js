let inscricao = "01.004.823/001-12";

inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{13}$/.test(inscricao);

if (validainscricao) {

    if (inscricao[0] == 0 && inscricao[1] == 1) {
        // primeiro cálculo

        const peso = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const ie = [];

        for (let i = 0; i < 11; i++) {
            ie.push(parseInt(inscricao[i]) * peso[i]);
        }

        const somaProdutos = ie.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);

        const resto = somaProdutos % 11;

        digitoVerificador1 = 11 - resto;

        if (digitoVerificador1 === 10 || digitoVerificador1 === 11) {
            digitoVerificador1 = 0;
        }

        // segundo cálculo 

        const peso2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const ie2 = [];

        for (let i = 0; i < 12; i++) {
            ie2.push(parseInt(inscricao[i]) * peso2[i]);
        }

        const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);

        const resto2 = somaProdutos2 % 11;

        digitoVerificador2 = 11 - resto2;

        if (digitoVerificador2 === 10 || digitoVerificador2 === 11) {
            digitoVerificador2 = 0;
        }

        if (inscricao[11] == digitoVerificador1 && inscricao[12] == digitoVerificador2) {
            //console.log('sim')
            true
        } else {
            //console.log('não')
            false
        }
    } else {
        false
    }

} else {
    false
}


