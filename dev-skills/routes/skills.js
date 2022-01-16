var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);
router.put('/:id', skillsCtrl.update);
router.delete('/:id', skillsCtrl.delete);
router.get('/edit/:id', skillsCtrl.edit);

module.exports = router;


