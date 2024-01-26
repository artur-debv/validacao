let inscricao = "0000000062521-3";

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

        let digitoVerificador;
        if (resto === 10 || resto === 11) {
            digitoVerificador = 0;
        } else {
            digitoVerificador = 11 - resto;
        }

        if (inscricao[8] == digitoVerificador) {
            //console.log('sim')
            true
        } else {
            //console.log('não')
            falses
        }

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

        if (inscricao[13] == digitoVerificador) {
            //console.log('sim')
            true
        } else {
            //console.log('não')
            falses
        }

    } else {
        false
    }

} else {
    false
}
