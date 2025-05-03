# Acesso a /protected com token válido
curl -X GET http://localhost:3000/auth/protected \
  -H "Authorization: Bearer <VALID_JWT_TOKEN>"
