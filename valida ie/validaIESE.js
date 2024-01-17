function validaIESE() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8) {
        console.error('A inscrição estadual do Sergipe deve conter 9 dígitos.');
        return null;
    }

}

export default validaIESE