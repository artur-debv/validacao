function validaIESE(inscricao) {

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

        let digitoVerificador;
        
        if (resto === 0 || resto === 1) {
            digitoVerificador = 0;
        } else {
            digitoVerificador = 11 - resto;
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

export default validaIESE

//let inscricao = "27123456-3";
//console.log(validaIESE(inscricao))
