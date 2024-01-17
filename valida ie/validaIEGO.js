function validaIEGO() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 8) {
        console.error('A inscrição estadual de Goiás deve conter 9 dígitos.');
        return null;
    }

}

export default validaIEGO