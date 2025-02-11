# Testes Automatizados

Este repositório contém testes automatizados para **API (Newman/Postman)**, **UI (Cypress)** e **Performance (k6)**.  
Os testes são executados automaticamente via **GitHub Actions** a cada novo push.

## Status dos Testes

![Testes da API](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/api-tests.yml/badge.svg)

![Testes E2E](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/cypress-tests.yml/badge.svg)

![Testes de Performance](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/performance-tests.yml/badge.svg)


## Resultados dos Testes

### ✅ Testes da API
- Executados com **Newman/Postman** (`api-tests.yml`).
- Testam a resposta dos endpoints e validam estrutura e status HTTP.
- São acionados automaticamente em cada novo push.

### ✅ Testes End-to-End (E2E)
- Executados com **Cypress** (`cypress-tests.yml`).
- Validam o comportamento da aplicação de ponta a ponta.
- Testam cenários reais como login, cadastro e fluxo de navegação.

### ✅ Testes de Performance
- Executados com **k6** (`performance-tests.yml`).
- Avaliam como a API responde sob carga, medindo latência e taxa de erro.
- Definem **thresholds** para identificar gargalos.


## Últimos Resultados

Os logs detalhados podem ser acessados diretamente nos workflows:

- [🔹 Logs dos Testes da API](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/api-tests.yml)
- [🔹 Logs dos Testes E2E](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/cypress-tests.yml)
- [🔹 Logs dos Testes de Performance](https://github.com/camilalnmouraa/desafio-testes-automatizados/actions/workflows/performance-tests.yml)

___

Feito com 🩵 e ☕ por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/).
