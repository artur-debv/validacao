function validaIERO() {

     // Verificar se a inscrição tem o tamanho esperado
     if (inscricao.length !== 8 || inscricao.length !== 13) {
        console.error('A inscrição estadual de Rondônia deve conter 9 dígitos se for criada antes de 01/08/2000 ou 14 dígitos se foi criada após 01/08/2000.');
        return null;
    }

}

export default validaIERO