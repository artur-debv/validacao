function validaIERN() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8) {
        console.error('A inscrição estadual do Rio Grande do Norte deve conter 9 dígitos.');
        return null;
    }

}

export default validaIERN