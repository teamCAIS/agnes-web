export const getValidation = (args={}) => {
  for(const field in args) {
    if(!args[field]) {
      return `Campo ${field} obrigatório`;
    }
    if(field == 'e-mail' && !isEmailValid(args[field])) {
      return "Digite um e-mail válido";
    }
  }
  return false;
};

const isEmailValid = (mail) => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
}
