function validaIESC() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8) {
        console.error('A inscrição estadual de Santa Catarina deve conter 9 dígitos.');
        return null;
    }

}

export default validaIESC