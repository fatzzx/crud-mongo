# Registro bem-sucedido
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "username": "newuser", "email": "newuser@example.com", "password": "ValidPassword123" }'
