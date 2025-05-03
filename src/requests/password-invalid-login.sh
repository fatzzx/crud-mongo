# Senha inválida no login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "newuser@example.com", "password": "InvalidPassword" }'
