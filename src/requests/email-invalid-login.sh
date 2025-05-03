# E-mail inválido no login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "invalidemail@example.com", "password": "ValidPassword123" }'
