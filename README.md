# 📦 Entendendo o JSON (JavaScript Object Notation)

Este repositório foi criado para centralizar os conceitos, sintaxe e métodos relacionados ao **JSON**, reunindo informações de diversas fontes confiáveis da comunidade de desenvolvimento.

## 📖 O que é JSON?
JSON é um formato leve de troca de dados. Apesar de derivar da sintaxe de objetos do JavaScript (como o próprio nome sugere), ele é **independente de linguagem**. Isso significa que você pode usar JSON para transitar dados entre sistemas escritos em Java, C#, Python, PHP, etc.

**Principais características:**
* Fácil de ler e escrever por humanos.
* Fácil de ser analisado (parseado) e gerado por máquinas.
* Baseia-se em uma estrutura de **chave-valor** (key-value pairs).

## 🏗️ Sintaxe e Tipos de Dados Suportados
No formato JSON, os dados são representados dentro de chaves `{}`. As chaves (nomes das propriedades) devem obrigatoriamente estar entre aspas duplas `""`.

Os valores em um JSON podem ser:
* **String:** `"Texto"` (sempre com aspas duplas)
* **Number:** `10` ou `3.14`
* **Boolean:** `true` ou `false`
* **Array:** `["maçã", "banana"]`
* **Object:** `{"outraChave": "outroValor"}`
* **Null:** `null`

*(Atenção: JSON não suporta funções, datas nativas ou `undefined` diretamente em sua estrutura de string).*

## 🛠️ Métodos Globais do Objeto JSON (JavaScript)
Quando estamos trabalhando com JavaScript, o navegador (ou Node.js) nos fornece um objeto global chamado `JSON` com dois métodos fundamentais:

1. **`JSON.stringify(objeto)`**: Pega um objeto JavaScript real na memória e o converte em uma *String* no formato JSON. Muito usado na hora de enviar dados para uma API.
2. **`JSON.parse(stringJSON)`**: Pega uma *String* que está no formato JSON e a converte de volta em um objeto JavaScript utilizável. Muito usado ao receber dados de uma API.

## 🔗 Referências e Materiais de Estudo
O conteúdo deste repositório foi construído com base nos seguintes materiais:
* [MDN Web Docs - Objeto Global JSON](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [MDN Web Docs - Trabalhando com JSON](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/JSON)
* [Medium (Júlio Carneiro) - Introdução ao JSON](https://juliocarneiro.medium.com/introdu%C3%A7%C3%A3o-ao-json-7825b1a550ff)
* [Alura - O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json)
* [YouTube (Marco Bruno) - O que é Json e como criar um objeto](https://www.youtube.com/watch?v=oCY5YEEjlwE)
