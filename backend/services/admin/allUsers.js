const { Employees, Workcenters } = require('../../models');
async function allUsers(req, res) {
  Workcenters.hasMany(Employees, { foreignKey: 'workcenterid' });
  Employees.belongsTo(Workcenters, { foreignKey: 'workcenterid' });

  const listUsers = await Employees.findAll({
    raw: true,
    include: [{ model: Workcenters }],
  });
  res.json(listUsers);
}

module.exports = allUsers;
