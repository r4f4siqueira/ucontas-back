# Arquvo criado para entender o funconamento das requisições na API

# Testar login
$curl -X POST http://127.0.0.1:3333/auth/login -d '{"username": "Rafael", "password": "123123"}' -H "Content-Type: application/json"

# Pegar dados do usuário com o token
$curl http://127.0.0.1:3333/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhZmFlbCIsInN1YiI6MSwiaWF0IjoxNjc4ODA1Mjk4LCJleHAiOjE2Nzg4MDUzNTh9.iyYzmCUa5ukCCdZRDcaqOKaY_hAmIDua0_c2UgXOIyQ"