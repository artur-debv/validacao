inscricao = inscricao.replace(/\D/g, '');

const validainscricao = /^[0-9]{10}$/.test(inscricao);

if (validainscricao) {
    true
} else {
    false
}