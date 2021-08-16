# [Exercise Tracker](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker)

Este repositório é a minha solução para o desafio [Exercise Tracker](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker) para obtenção do certificado do curso  [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).

## 🎌 Objetivos

- Aplicar os conhecimentos obtidos no curso [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).
- Montar uma API que passe nos testes:
	- :white_check_mark: A API pode receber uma requisição POST para ```/api/users```contendo um ```username``` para criar um novo usuário. Como resposta o servidor retorna um JSON contendo o ```username``` e o ```_id``` do usuário registrado.
	- :white_check_mark: Quando o usuário enviar uma requisição GET para a rota ```/api/users```, o servidor retornará a lista de usuários registrado no sistema. 
	- :white_check_mark: O usuário pode registrar um exercício enviando um requisição POST para `/api/users/:_id/exercises` contendo os campos de `description`, `duration` e opcionalmente `date`. Se `date` for nulo então utiliza-se a data atual neste parâmetro. O servidor deve retornar um objeto em formato JSON contendo o objeto usuário com o `_id` descrito na URL e com os campos do exercício adicionados a ele.
	- :white_check_mark: Quando o usuário fizer uma requisição GET na rota `/api/users/:_id/logs` o servidor retorna um objeto em formato JSON contendo `count` com o número de exercícios registrado para esse usuário e um array contendo todas as informações esses exercícios (`description`, `duration`, `date`).
	- :white_check_mark: O usuário pode adicionar os parâmetros `from`, `to` e `limit` através de query string em `/api/users/:_id/logs` para limitar a data dos exercícios retornados setando `from` e/ou `to` , e limitar o número de exercícios retornados através do parâmetro `limit`.
		- Exemplos:
			- `/api/users/:_id/logs?from=2000-05-06`
			- `/api/users/:_id/logs?from=2000-05-06&to=2020-08-16`
			- `/api/users/:_id/logs?to=2021-05-06&limit=2`
			- `/api/users/:_id/logs?limit=2`

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com)

## 📁 Libraries

- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)

## ✨ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um banco de dados [MongoDB](https://www.mongodb.com).

## 🚀 Getting Started

- Configure a URI do seu banco MongoDB na variável de ambiente ```MONGO_URI``` no arquivo ```.env```.
- Configure a porta que o seu servidor utilizará informando-a em uma variável de ambiente ```PORT``` no arquivo ```.env```.
- Rode os seguintes comandos no terminal para iniciar o server (Certifique-se que seu banco de dados está online):

```
# for npm users
 npm install
# then 
 npm start
```
## :octocat: Autor

Feito com 👨🏻‍💻 por Gabriel Willans 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-willans-780754200/)](https://www.linkedin.com/in/gabriel-willans-780754200/) [![Outlook Badge](https://img.shields.io/badge/-g.willans@outlook.com-00a0ee?style=flat-square&logo=microsoftoutlook&logoColor=white&link=mailto:g.willans@outlook.com)](mailto:g.willans@outlook.com)

