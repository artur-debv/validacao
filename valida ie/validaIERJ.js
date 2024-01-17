function validaIERJ() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 7) {
        console.error('A inscrição estadual do Rio de Janeiro  deve conter 8 dígitos.');
        return null;
    }

}

export default validaIERJ