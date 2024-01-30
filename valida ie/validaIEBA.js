function validaIEBA(inscricao) {

    inscricao = inscricao.replace(/\D/g, '');

    if (inscricao.length === 8) {

        const validainscricao = /^[0-9]{8}$/.test(inscricao);

        if (validainscricao) {

            if (inscricao[0] >= 0 && inscricao[0] <= 5 || inscricao[0] == 8) {
                //segundo digito 
                const peso2 = [7, 6, 5, 4, 3, 2];
                const ie2 = [];

                for (let i = 0; i < 6; i++) {
                    ie2.push(parseInt(inscricao[i]) * peso2[i]);
                }

                const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto2 = somaProdutos2 % 10;

                const digitoVerificador2 = 10 - resto2

                if (resto2 === 0) {
                    digitoVerificador2 = 0
                }

                //primeiro digito
                let inscricaoSlice = inscricao.slice(0, 6) + inscricao.slice(7);
                const peso = [8, 7, 6, 5, 4, 3, 2];
                const ie = [];

                for (let i = 0; i < 7; i++) {
                    ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
                }

                const somaProdutos = ie.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto = somaProdutos % 10;

                const digitoVerificador = 10 - resto

                if (resto === 0) {
                    digitoVerificador = 0
                }

                if (inscricao[6] == digitoVerificador && inscricao[7] == digitoVerificador2) {
                    return true

                } else {
                    return false
                }

            } else if (inscricao[0] == 6 || inscricao[0] == 7 || inscricao[0] == 9) {
                //segundo digito 
                const peso2 = [7, 6, 5, 4, 3, 2];
                const ie2 = [];

                for (let i = 0; i < 6; i++) {
                    ie2.push(parseInt(inscricao[i]) * peso2[i]);
                }

                const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto2 = somaProdutos2 % 11;

                const digitoVerificador2 = 11 - resto2

                if (resto2 === 0 || resto2 === 1) {
                    digitoVerificador2 = 0
                }

                //primeiro digito
                let inscricaoSlice = inscricao.slice(0, 6) + inscricao.slice(7);
                const peso = [8, 7, 6, 5, 4, 3, 2];
                const ie = [];

                for (let i = 0; i < 7; i++) {
                    ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
                }

                const somaProdutos = ie.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto = somaProdutos % 11;

                const digitoVerificador = 11 - resto

                if (resto === 0 || resto === 1) {
                    digitoVerificador = 0
                }

                if (inscricao[6] == digitoVerificador && inscricao[7] == digitoVerificador2) {
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

    } else if (inscricao.length === 9) {

        const validainscricao = /^[0-9]{9}$/.test(inscricao);

        if (validainscricao) {

            if (inscricao[0] >= 0 && inscricao[0] <= 5 || inscricao[0] == 8) {
                //segundo digito 
                const peso2 = [8, 7, 6, 5, 4, 3, 2];
                const ie2 = [];

                for (let i = 0; i < 7; i++) {
                    ie2.push(parseInt(inscricao[i]) * peso2[i]);
                }

                const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto2 = somaProdutos2 % 10;

                const digitoVerificador2 = 10 - resto2

                if (resto2 === 0) {
                    digitoVerificador2 = 0
                }

                //primeiro digito
                let inscricaoSlice = inscricao.slice(0, 7) + inscricao.slice(8);
                const peso = [9, 8, 7, 6, 5, 4, 3, 2];
                const ie = [];

                for (let i = 0; i < 8; i++) {
                    ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
                }

                const somaProdutos = ie.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto = somaProdutos % 10;

                digitoVerificador = 10 - resto

                if (resto === 0) {
                    digitoVerificador = 0
                }

                if (inscricao[7] == digitoVerificador && inscricao[8] == digitoVerificador2) {
                    return true
                    
                } else {
                    return false
                }

            } else if (inscricao[0] == 6 || inscricao[0] == 7 || inscricao[0] == 9) {
                //segundo digito 
                const peso2 = [8, 7, 6, 5, 4, 3, 2];
                const ie2 = [];

                for (let i = 0; i < 7; i++) {
                    ie2.push(parseInt(inscricao[i]) * peso2[i]);
                }

                const somaProdutos2 = ie2.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto2 = somaProdutos2 % 11;

                const digitoVerificador2 = 11 - resto2

                if (resto2 === 0 || resto2 === 1) {
                    digitoVerificador2 = 0
                }

                //primeiro digito
                let inscricaoSlice = inscricao.slice(0, 7) + inscricao.slice(8);
                const peso = [9, 8, 7, 6, 5, 4, 3, 2];
                const ie = [];

                for (let i = 0; i < 8; i++) {
                    ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
                }

                const somaProdutos = ie.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);

                const resto = somaProdutos % 11;

                digitoVerificador = 11 - resto

                if (resto === 0 || resto === 1) {
                    digitoVerificador = 0
                }

                if (inscricao[7] == digitoVerificador && inscricao[8] == digitoVerificador2) {
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

    } else {
        return false
    }

}

export default validaIEBA

//let inscricao = "1 2 3 4 5 6 - 6 3";
//let inscricao = "6 1 2 3 4 5 - 5 7 ";
//let inscricao = "1 0 0 0 0 0 3 - 0 6";
//console.log(validaIEBA(inscricao))
