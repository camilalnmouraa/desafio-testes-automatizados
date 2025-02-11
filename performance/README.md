# Teste de Performance com k6

Este repositório contém um teste de carga utilizando [k6](https://k6.io/), uma ferramenta open-source para testes de performance.

## Descrição

O teste simula múltiplos usuários acessando um endpoint para avaliar o desempenho da aplicação sob carga. O script executa as seguintes etapas:

1. **Aquecimento:** 10 usuários são adicionados gradualmente em 10 segundos.
2. **Carga Sustentada:** 100 usuários simultâneos são mantidos por 20 segundos.
3. **Encerramento:** A carga é reduzida até 0 usuários em 10 segundos.

O teste verifica:
- Se as requisições retornam código HTTP `200`.
- Se 95% das requisições são respondidas em menos de **500ms**.
- Se a taxa de erro não ultrapassa **1%**.

## Como Executar

### Pré-requisitos

- Ter o [k6 instalado](https://k6.io/docs/getting-started/installation/).

### Rodando o teste

Execute o comando abaixo no terminal:

```sh
k6 run load-test.js 
```

### Métricas Avaliadas
- **Tempo de resposta:** O tempo de resposta das requisições deve ser menor que 500ms para 95% dos casos.
- **Taxa de falha:** O percentual de falhas não deve exceder 1%.

___

Feito com 🩵 e ☕ por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/).
