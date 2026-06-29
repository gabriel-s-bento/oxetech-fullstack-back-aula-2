const bcrypt = require("bcrypt");
const prisma = require("../prisma/client");
const { generateToken } = require("../utils/jwt");

async function register(data) {
  const senhaHash = await bcrypt.hash(data.senha, 10);

  return prisma.developer.create({
    data: {
      nome: data.nome,
      githubUrl: data.githubUrl,
      senha: senhaHash,
    },
  });
}

async function login(data) {
  const developer = await prisma.developer.findUnique({
    where: {
      githubUrl: data.githubUrl,
    },
  });

  if (!developer) throw new Error("Usuário não encontrado.");

  const senhaValida = await bcrypt.compare(data.senha, developer.senha);

  if (!senhaValida) throw new Error("Senha inválida.");

  return generateToken({
    id: developer.id,
  });
}

module.exports = {
  register,
  login,
};
