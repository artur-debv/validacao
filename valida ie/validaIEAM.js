function validaIEAM(inscricao) {

    inscricao = inscricao.replace(/\D/g, '');

    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {

        const peso = [9, 8, 7, 6, 5, 4, 3, 2];
        const ie = [];

        for (let i = 0; i < 8; i++) {
            ie.push(parseInt(inscricao[i]) * peso[i]);
        }

        const somaProdutos = ie.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);

        let digitoVerificador;

        if (somaProdutos < 11) {
            digitoVerificador = 11 - somaProdutos;

        } else {
            const resto = somaProdutos % 11;

            if (resto <= 1) {
                digitoVerificador = 0;

            } else {
                digitoVerificador = 11 - resto
            }
        }

        if (inscricao[8] == digitoVerificador) {
            return true

        } else {
            return false
        }

    } else {
        return false
    }

}

export default validaIEAM

//let inscricao = "99.999.999-0";
//console.log(validaIEAM(inscricao))
