function validaIEDF() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 12) {
        console.error('A inscrição estadual do Distrito Federal deve conter 13 dígitos.');
        return null;
    }

}

export default validaIEDF