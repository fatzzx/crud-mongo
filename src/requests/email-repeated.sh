# E-mail repetido
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{ "username": "anotheruser", "email": "newuser@example.com", "password": "ValidPassword123" }'
