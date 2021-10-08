const { Employees } = require('../../models');
const bcrypt = require('bcrypt');

async function editUser(req, res) {
  const {
    id,
    lastname,
    firstname,
    email,
    password,
    jobtitle,
    workcenterid,
    status,
  } = req.body;
  // console.log(req.body);
  try {
    if (password) {
      const hash = await bcrypt.hash(password, 10);
      const out = await Employees.update(
        {
          lastname,
          firstname,
          email,
          password: hash,
          jobtitle,
          workcenterid,
          status,
        },
        {
          where: {
            id,
          },
        },
      );
    } else {
      const out = await Employees.update(
        {
          lastname,
          firstname,
          email,
          jobtitle,
          workcenterid,
          status,
        },
        {
          where: {
            id,
          },
        },
      );
    }
    res.json({ error: false, message: 'User updated' });
  } catch (e) {
    res.json({ error: true, message: 'Error' });
  }
}

module.exports = editUser;
