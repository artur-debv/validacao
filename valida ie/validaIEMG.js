function validaIEMG() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 12) {
        console.error('A inscrição estadual de Minas Gerais deve conter 13 dígitos.');
        return null;
    }

}

export default validaIEMG