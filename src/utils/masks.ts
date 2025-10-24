// Máscaras para formatação de inputs

export const maskCPF = (value: string): string => {
  return value
    .replace(/\D/g, '') // Remove tudo que não é dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os 3 primeiros dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os 6 primeiros dígitos
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Adiciona hífen antes dos 2 últimos dígitos
    .substring(0, 14); // Limita o tamanho
};

export const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 15);
};

export const maskCEP = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 9);
};

export const maskPlate = (value: string): string => {
  // Suporta placas antigas (AAA-1234) e Mercosul (AAA1B23)
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .replace(/([A-Z]{3})([0-9A-Z])/, '$1-$2')
    .substring(0, 8);
};

export const maskYear = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .substring(0, 4);
};

export const maskCNH = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .substring(0, 11);
};

// Validações
export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, '');
  
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }
  
  let sum = 0;
  let remainder;
  
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
  return true;
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
};

export const validateCEP = (cep: string): boolean => {
  const digits = cep.replace(/\D/g, '');
  return digits.length === 8;
};

export const validateYear = (year: string): boolean => {
  const yearNum = parseInt(year);
  const currentYear = new Date().getFullYear();
  return yearNum >= 1900 && yearNum <= currentYear + 1;
};
