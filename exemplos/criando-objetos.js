// Ao invés de criarmos variáveis soltas como:
// const title = "Harry Potter";
// const url = "http://caminho.com/imagem.jpg";

// Nós agrupamos essas características em um único objeto usando chaves {}
const movie = {
    "title": "Harry Potter",
    "url": "http://caminho.com/imagem.jpg",
    "diretor": "Chris Columbus"
};

// Acessando as propriedades do objeto usando o "ponto" (dot notation)
console.log(movie.title); // Saída: Harry Potter
console.log(movie.url);   // Saída: http://caminho.com/imagem.jpg
