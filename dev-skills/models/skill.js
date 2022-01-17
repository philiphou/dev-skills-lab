const skills = [
    {id: 0, skill: 'HTML', Score: 80},
    {id: 1, skill: 'CSS', Score: 85},
    {id: 2, skill: 'JS', Score: 70}
]
module.exports = { 
    getAll, 
    getOne, 
    create, 
    deleteOne,
    update
};

function update(id,skill) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id=parseInt(id);
    skills.splice(idx,1, skill)
}
function deleteOne(id) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = skills.length;
    skill.Score=50;
    skills.push(skill);
};
function getOne(id) {
    return skills.find(skill=>skill.id===parseInt(id));
    
 };
 
 

function getAll() {
    return skills;
};



