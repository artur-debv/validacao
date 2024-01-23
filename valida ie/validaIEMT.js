inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{11}$/.test(inscricao);

if (validainscricao) {
    true
} else {
    false
}