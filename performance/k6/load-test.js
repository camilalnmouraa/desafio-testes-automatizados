import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // Aumenta para 10 usuários em 10s
    { duration: '20s', target: 100 }, // Mantém 100 usuários por 20s
    { duration: '10s', target: 0 }, // Diminui a carga para 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser < 500ms
    http_req_failed: ['rate<0.01'], // Erros devem ser < 1%
  },
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');

  check(res, {
    'Status é 200': (r) => r.status === 200,
    'Tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); //Pequeno atraso entre requisições
}