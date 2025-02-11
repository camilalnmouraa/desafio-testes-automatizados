# Testes de API

[![CI](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/api-tests.yml/badge.svg)](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions)

Este diretório contém testes automatizados para validar a API **JSONPlaceholder**, garantindo que os endpoints funcionam conforme esperado.  

---

## Pré-requisitos

Para executar os testes de API, você precisará dos seguintes sistemas instalados em seu computador:

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/downloads/) (opcional, para rodar manualmente)
- [Newman](https://github.com/postmanlabs/newman) (para execução automatizada via linha de comando)

## Instalação

Para instalar as dependências de desenvolvimento, execute o comando:

```sh
npm install -g newman
```

## Executando os testes de API

No projeto, os testes podem ser executados com:

```sh
npm run test:api
```

Esse comando está definido no `package.json` e executa os testes via Newman.

___

Feito com 🩵 e ☕ por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/).
