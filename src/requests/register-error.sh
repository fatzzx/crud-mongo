# Registro com erro (faltando dados)
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "username": "newuser" }'
