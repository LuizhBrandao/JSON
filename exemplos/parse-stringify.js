// 1. Convertendo de Objeto JS para String JSON (Para enviar dados)
const usuarioJS = {
  nome: "Luiz",
  idade: 25,
  ativo: true
};

const stringJSON = JSON.stringify(usuarioJS);
console.log(typeof stringJSON); // Saída: string
console.log(stringJSON); // Saída: '{"nome":"Luiz","idade":25,"ativo":true}'

// 2. Convertendo de String JSON para Objeto JS (Para ler dados recebidos)
const dadosRecebidosAPI = '{"curso": "Programação", "plataforma": "GitHub"}';

const objetoReal = JSON.parse(dadosRecebidosAPI);
console.log(typeof objetoReal); // Saída: object
console.log(objetoReal.curso);  // Saída: Programação
