function validaCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    const calculaDigito = (cnpj, posicao) => {
        let soma = 0;
        let peso = posicao === 1 ? 5 : 6;

        for (let i = 0; i < posicao; i++) {
            soma += parseInt(cnpj.charAt(i)) * peso;
            peso -= 1;
            if (peso === 1) {
                peso = 9;
            }
        }

        const resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return parseInt(cnpj.charAt(posicao)) === resultado;
    };

    return calculaDigito(cnpj, 12) && calculaDigito(cnpj, 13);
}

// Exemplo de uso
const cnpj = "04.252.011/0001-10";
console.log(validaCNPJ(cnpj)); 


