const { Items } = require('../../models/index');

async function createProduct(req, res) {
  const { name, partnumber, description } = req.body;
  const wc = {};
  const count = [1, 2, 3];
  count.forEach((num) => {
    if (req.body[`workcenter${num}`] !== 'empty') {
      wc[`workcenter${num}`] = req.body[`workcenter${num}`];
      wc[`descrroute${num}`] = req.body[`descrroute${num}`];
      wc[`cycletime${num}`] = +req.body[`cycletime${num}`].replace(',', '.');
    }
  });
  console.log(wc);
  if (name && partnumber && description && wc.workcenter1 !== undefined) {
    try {
      const [newItem, created] = await Items.findOrCreate({
        where: { partnumber },
        defaults: { name, partnumber, description, ...wc },
        options: { raw: true },
      });
      created
        ? res.json({ error: false, message: `Item was created. ID: ${newItem.id}` })
        : res.json({
            error: true,
            message: `Partnumber (${partnumber}) is already exist`,
          });
    } catch (e) {
      console.log(e);
      res.json({ error: true, message: 'DB error, try again' });
    }
  } else {
    res.json({ error: true, message: 'All fields must be require' });
  }
}

module.exports = createProduct;
