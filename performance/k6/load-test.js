import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 20 },  // Sobe para 20 usuários em 10s
    { duration: '20s', target: 100 }, // Mantém 100 usuários por 20s
    { duration: '10s', target: 0 }    // Reduz para 0 usuários em 10s
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser respondidas em até 500ms
    http_req_failed: ['rate<0.01']    // Menos de 1% das requisições devem falhar
  }
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function () {
  //Testa GET /users
  let resGet = http.get(`${BASE_URL}/users`);
  check(resGet, {
    'GET /users - Status 200': (r) => r.status === 200,
    'GET /users - Tempo < 500ms': (r) => r.timings.duration < 500
  });

  //Testa POST /users
  let resPost = http.post(`${BASE_URL}/users`, JSON.stringify({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com'
  }), { headers: { 'Content-Type': 'application/json' } });

  check(resPost, {
    'POST /users - Status 201': (r) => r.status === 201,
    'POST /users - Tempo < 500ms': (r) => r.timings.duration < 500
  });

  //Testa POST inválido /users
  let resInvalid = http.post(`${BASE_URL}/users`, JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
  check(resInvalid, {
    'POST /users (inválido) - Status 400': (r) => r.status === 400
  });

  //Simula erro do servidor /server-error
  let resServerError = http.post(`${BASE_URL}/server-error`);
  check(resServerError, {
    'POST /server-error - Status 500': (r) => r.status === 500
  });

  sleep(1);
}