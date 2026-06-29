curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"nome": "Eu", "githubUrl": "https://github.com/eu", "senha": "123456"}'
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"githubUrl": "https://github.com/eu", "senha": "123456"}'

curl -X POST http://localhost:3000/projetos -H "Content-Type: application/json" -H "Authorization: Bearer token" -d '{"titulo": "CryptoPulse", "descricao": "Monitoramento de criptomoedas", "tecnologiaPrincipal": "nodejs"}'
