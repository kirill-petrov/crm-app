require('dotenv').config();
const { Employees, Workcenters } = require('../../models');
const bcrypt = require('bcrypt');
async function loginUser(req, res) {
  const { email, password } = req.body;

  Workcenters.hasMany(Employees, { foreignKey: 'workcenterid' });
  Employees.belongsTo(Workcenters, { foreignKey: 'workcenterid' });

  if (email && password) {
    try {
      const checkUser = await Employees.findOne({
        where: {
          email,
        },
        include: {
          model: Workcenters,
        },
        raw: true,
      });
      if (checkUser !== null) {
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (checkUser && checkPassword) {
          req.session.user = checkUser;
          res.json({
            error: false,
            data: {
              id: checkUser.id,
              name: checkUser.firstname,
              lastname: checkUser.lastname,
              status: checkUser.status,
              jobtitle: checkUser.jobtitle,
              wccode: checkUser['Workcenter.code'],
              wcid: checkUser.workcenterid,
            },
            message: `Authorization successful, ${checkUser.firstname}`,
          });
        } else {
          res.json({
            error: true,
            message: 'Uncorrect password',
            data: { status: false },
          });
        }
      } else {
        res.json({
          error: true,
          message: 'Uncorrect email',
          data: { status: false },
        });
      }
    } catch (e) {
      res.json({ error: true, massage: 'Unauthorized', data: { status: false } });
    }
  }
}

module.exports = loginUser;
