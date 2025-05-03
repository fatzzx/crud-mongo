# Login com erro (faltando dados)
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "newuser@example.com" }'
