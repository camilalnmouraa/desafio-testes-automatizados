# JSONPlaceholder API - Testes Automatizados

Esta collection contém testes automatizados para validar a API **JSONPlaceholder**, garantindo que os endpoints funcionam conforme esperado.

## Endpoints Testados

### 1️⃣ **GET /users** - Listar Usuários  
✔️ Valida se a API retorna corretamente a lista de usuários.  
✔️ Verifica se a resposta contém os campos esperados (`id`, `name`, `username`, `email`, `address`).  
✔️ Confirma que o status retornado é **200 OK**.  

### 2️⃣ **POST /users** - Criar Usuário  
✔️ Garante que uma nova criação de usuário retorna **201 Created**.  
✔️ Valida se a resposta contém os dados enviados e um `id` gerado pela API.  

### 3️⃣ **POST /users (Erro 400 - Requisição Inválida)**  
✔️ Simula uma requisição sem campos obrigatórios e valida o retorno **400 Bad Request**.  
✔️ Confirma que a resposta contém a mensagem de erro esperada.  

### 4️⃣ **POST /server-error (Erro 500 - Erro Interno do Servidor)**  
✔️ Simula um erro no servidor e garante que a API retorna **500 Internal Server Error**.  
✔️ Verifica se a resposta contém os detalhes do erro.  

---

## Como Executar os Testes

### **1. Rodar via Postman**
1. Abra o **Postman**.
2. Importe a Collection `JSONPlaceholder API.postman_collection.json`.
3. Clique em **Run Collection** e execute todos os testes.


### **2. Execute a Collection no terminal**

   ```sh
   npm run test:api
```
___

Feito com 🩵 e ☕ por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/).
