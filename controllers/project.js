const projectService = require("../services/project");

async function create(req, res) {
  try {
    const project = await projectService.create(req.userId, req.body);

    return res.status(201).json(project);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

async function listAll(req, res){
  try {
    const projects = await projectService.listAll();
    return res.status(201).json(projects);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  create,
  listAll,
};
