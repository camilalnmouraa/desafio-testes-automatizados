# Testes de Performance

[![CI](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/performance-tests.yml/badge.svg)](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions)

Este diretório contém testes de performance automatizados utilizando [k6](https://k6.io/).

---

## Pré-requisitos

Para executar os testes de performance, você precisará dos seguintes sistemas instalados em seu computador:

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- [k6](https://k6.io/docs/getting-started/installation/)

## Instalação

Para instalar as dependências de desenvolvimento, execute o comando:

```sh
npm install
```

## Executando os testes de performance

Os testes de carga podem ser executados utilizando o k6.

### Rodando os testes

Execute o comando :

```sh
npm run test:load
```

O teste simula múltiplos usuários acessando a aplicação e mede métricas como tempo de resposta e taxa de falhas.

___

Feito com 🩵 e ☕ por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/).
