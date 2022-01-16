const skills = [
    {id: 0, skill: 'HTML', Score: "80"},
    {id: 1, skill: 'CSS', Score: "85"},
    {id: 2, skill: 'JS', Score: "70"}
]
module.exports = { 
    getAll, 
    getOne, 
    create, 
    deleteOne,
    
};

function getAll() {
    return skills;
};

function getOne(id) {
   return skills.find(skill=>skill.id===parseInt(id);
   
};

function create(skill) {
    skill.Score = Math.random() * 100;
    skill.id = skills.length;
    skills.push(skill);
};

function deleteOne(id) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1)
}

function updateOne(id,newSkill) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id));
    newSkill.id=parseInt(id);
    skills.splice(idx,1, newSkill)
}
