const { Employees } = require('../../models');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
  const { lastname, firstname, email, password, jobtitle, workcenterid } = req.body;
  if (lastname && firstname && email && password && jobtitle && workcenterid) {
    const hash = (hashPass = await bcrypt.hash(password, 10));
    try {
      const [user, created] = await Employees.findOrCreate({
        where: { email },
        defaults: {
          lastname,
          firstname,
          email,
          password: hash,
          jobtitle,
          workcenterid: +workcenterid,
        },
        raw: true,
      });
      created
        ? res.json({ error: false, message: `User was created. ID: ${user.id}` })
        : res.json({ error: true, message: `Email (${email}) is already exist` });
    } catch (e) {
      console.log(e);
      res.json({ error: true, message: 'DB error, try again' });
    }
  } else if (lastname && firstname && email && password && jobtitle ) {
      const hash = (hashPass = await bcrypt.hash(password, 10));
      try {
        const [user, created] = await Employees.findOrCreate({
          where: { email },
          defaults: {
            lastname,
            firstname,
            email,
            password: hash,
            jobtitle,
          },
          raw: true,
        });
        created
          ? res.json({ error: false, message: `User was created. ID: ${user.id}` })
          : res.json({ error: true, message: `Email (${email}) is already exist` });
      } catch (e) {
        console.log(e);
        res.json({ error: true, message: 'DB error, try again' });
      }
  } else {
    res.json({ error: true, message: 'All fields must be require' });
  }
}

module.exports = createUser;
