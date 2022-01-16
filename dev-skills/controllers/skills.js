var skillDb = require('../models/skills-db');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function index(req, res) {
    res.render('skills/index', {
        skills: skillDb.getAll(),
    });
};

function show(req, res) {
    res.render('skills/show', {
      skill: skillDb.getOne(req.params.id),
      skillNum: skillDb.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    });
  }
function edit(req, res) {
    res.render('skill/edit', {
        skill: skillDb.getOne(req.params.id)
    });
}

function deleteSkill(req, res) {
    skillDb.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    
    skillDb.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function update(req, res) {
  req.body.done = req.body.done === 'on';
  skillDb.update(req.params.id, req.body);
  res.redirect('/skills/${req.params.id');
}

