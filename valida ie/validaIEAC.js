function validaIEAC() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 12) {
        console.error('A inscrição estadual do Acre deve conter 13 dígitos.');
        return null;
    }

}

export default validaIEAC