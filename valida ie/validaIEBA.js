function validaIEBA() {

    // Verificar se a inscrição tem o tamanho esperado
    if (inscricao.length !== 7 || inscricao.length !== 8) {
        console.error('A inscrição estadual da Bahia deve conter 8 ou 9 dígitos.');
        return null;
    }

}

export default validaIEBA