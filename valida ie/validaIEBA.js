inscricao = inscricao.replace(/\D/g, '');

if (inscricao.length === 8) {
    const validainscricao = /^[0-9]{8}$/.test(inscricao);

    if (validainscricao) {

    } else {
        console.log("Inscrição inválida");
    }

} else if (inscricao.length === 9) {
    const validainscricao = /^[0-9]{9}$/.test(inscricao);

    if (validainscricao) {

    } else {
        false
    }

} else {
    false
}