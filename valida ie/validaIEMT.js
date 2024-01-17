function validaIEMT() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 10) {
        console.error('A inscrição estadual do Mato Grosso deve conter 11 dígitos.');
        return null;
    }

}

export default validaIEMT