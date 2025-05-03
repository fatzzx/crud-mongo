# Senha inválida
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "username": "userwithinvalidpassword", "email": "user@example.com", "password": "123" }'
