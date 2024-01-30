function validaIERR() {

    inscricao = inscricao.replace(/\D/g, '');

    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {
        
        if (inscricao[0] == 2 && inscricao[1] == 4) {
            const peso = [1, 2, 3, 4, 5, 6, 7, 8];
            const ie = []

            for (let i = 0; i < 8; i++) {
                ie.push(parseInt(inscricao[i]) * peso[i]);
            }

            const somaProdutos = ie.reduce(function (acumulador, valor) {
                return acumulador + valor;
            }, 0);

            const resto = somaProdutos % 9;

            digitoVerificador = resto

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

//let inscricao = "24006153-6";
//console.log(validaIERR(inscricao))
