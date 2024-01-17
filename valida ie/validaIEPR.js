function validaIEPR() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 9) {
        console.error('A inscrição estadual do Paraná deve conter 10 dígitos.');
        return null;
    }

}

export default validaIEPR