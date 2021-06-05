# API - Lojas Preferidas da Lilit :minidisc:

------

- CRUD criado como exercício da Semana 13 da turma 11 de backend da {reprograma} - Todas em Tech

- Versão 1.0.0

- TECNOLOGIAS: 

  ![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

  ![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

  ![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

------

- ###### ROTA DE APRESENTAÇÃO: GET "/"

  retorna apresentação com informações básicas do projeto

------

### ROTAS API "/Stores/"

------

#### POST "/" 

Requer o seguinte body schema:

 {

​	'name': "string",

​	"webpage": "string",

​	"category": "string",

​	"street": "string",

​	"number": "number",

​	"city": "string",

​	"state": "string"

}

retorna a loja criada

------

#### GET "/" 

retorna um JSON com todas as lojas cadastradas

------

#### PATCH "/:id"

Requer o ID da loja como path param e um body schema com a(s) propriedade(s) que devem ser atualizadas seguindo o seguinte modelo:

 {

​	'propriedade': "value",

​	"propriedade": "value",

}

retorna a loja atualizada

------

#### DELETE "/:id"

Requer o ID da loja como path param

Retorna mensagem confirmando que a loja foi deletada;

------

### EM BREVE

------

- Rota para localizar lojas por nome, categoria ou cidade;
- Rota para realizar like;
- Rota para realizar deslike;