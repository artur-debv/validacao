function validaIEMS() {

    inscricao = inscricao.replace(/\D/g, '');

    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {

        if (inscricao[0] == 2 && inscricao[1] == 8) {
            const peso = [9, 8, 7, 6, 5, 4, 3, 2];
            const ie = [];

            for (let i = 0; i < 8; i++) {
                ie.push(parseInt(inscricao[i]) * peso[i]);
            }

            const somaProdutos = ie.reduce(function (acumulador, valor) {
                return acumulador + valor;
            }, 0);

            const resto = somaProdutos % 11;

            if (resto === 0) {
                digitoVerificador = 0;

            } else {
                calc = 11 - resto;

                if (calc > 9) {
                    digitoVerificador = 0;

                } else {
                    digitoVerificador = calc
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

    } else {
        return false
    }

}

export default validaIEMS

//let inscricao = "283456787";
//console.log(validaIEMS(inscricao))
