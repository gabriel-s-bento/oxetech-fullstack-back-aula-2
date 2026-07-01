const prisma = require("../prisma/client");

async function create(userId, data) {
  return prisma.project.create({
    data: {
      titulo: data.titulo,
      descricao: data.descricao,
      tecnologiaPrincipal: data.tecnologiaPrincipal,

      developer: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

async function listAll() {
  return prisma.project.findMany();
}

module.exports = {
  create,
  listAll,
};
