# Tentativa de acesso a /protected com token inválido
curl -X GET http://localhost:3000/auth/protected \
  -H "Authorization: Bearer <INVALID_JWT_TOKEN>"
