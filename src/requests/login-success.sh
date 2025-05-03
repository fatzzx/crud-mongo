# Login bem-sucedido
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "newuser@example.com", "password": "ValidPassword123" }'
