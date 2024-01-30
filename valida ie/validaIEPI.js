function validaIEPI(inscricao) {

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

        const resto = somaProdutos % 11;

        digitoVerificador = 11 - resto;

        if (digitoVerificador === 10 || digitoVerificador === 11) {
            digitoVerificador = 0;
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

export default validaIEPI

//let inscricao = "012345679";
//console.log(validaIEPI(inscricao))
