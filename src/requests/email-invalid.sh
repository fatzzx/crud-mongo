# E-mail inválido
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "username": "user", "email": "invalidemail", "password": "ValidPassword123" }'
