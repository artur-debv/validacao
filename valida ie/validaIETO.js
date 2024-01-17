function validaIETO() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 10) {
        console.error('A inscrição estadual do Tocantins deve conter 11 dígitos.');
        return null;
    }

}

export default validaIETO