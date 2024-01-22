function validaIERS() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 9) {
        console.error('A inscrição estadual do Rio Grande do Sul deve conter 10 dígitos.');
        return null;
    }
}

export default validaIERS