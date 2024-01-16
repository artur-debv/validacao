function isValidCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais, o que torna o CPF inválido
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Calcular o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let firstDigit = (remainder >= 10) ? 0 : remainder;
  
    // Calcular o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let secondDigit = (remainder >= 10) ? 0 : remainder;
  
    // Verificar se os dígitos calculados são iguais aos dígitos informados
    return (parseInt(cpf.charAt(9)) === firstDigit && parseInt(cpf.charAt(10)) === secondDigit);
  }
  
  // Exemplo de uso
  const cpf = '123.456.789-09';
  const isCpfValid = isValidCPF(cpf);
  console.log(isCpfValid); // true or false