function validaIERO(inscricao) {

    inscricao = inscricao.replace(/\D/g, '');

    if (inscricao.length === 9) {

        const validainscricao = /^[0-9]{9}$/.test(inscricao);

        if (validainscricao) {

            const inscricaoSlice = inscricao.slice(3, 8);
            const peso = [6, 5, 4, 3, 2];
            const ie = [];

            for (let i = 0; i < 5; i++) {
                ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
            }

            const somaProdutos = ie.reduce(function (acumulador, valor) {
                return acumulador + valor;
            }, 0);

            const resto = somaProdutos % 11;

            let digitoVerificador = 11 - resto;

            if (digitoVerificador === 10 || digitoVerificador === 11) {
                digitoVerificador = digitoVerificador - 10;
            } 

            if (inscricao[8] == digitoVerificador) {
                return true

            } else {
                return false
            }

        } else {
            return false
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

            let digitoVerificador = 11 - resto;

            if (digitoVerificador === 10 || digitoVerificador === 11) {
                digitoVerificador = digitoVerificador - 10;
            } 

            if (inscricao[13] == digitoVerificador) {
                return true

            } else {
                return false
            }

        } else {
            false
        }

    } else {
        return false
    }

}

export default validaIERO

//let inscricao = "101.62521-3";
//let inscricao = "0000000062521-3";
//console.log(validaIERO(inscricao))
