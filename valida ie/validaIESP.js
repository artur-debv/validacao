function validaIESP() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 11) {
        console.error('A inscrição estadual de São Paulo deve conter 12 dígitos.');
        return null;
    }

}

export default validaIESP