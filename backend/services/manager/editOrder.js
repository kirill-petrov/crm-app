const { Orders } = require('../../models');
async function editOrder(req, res) {
  console.log(req.body);
  const { id, quantity, promiseddate, priority } = req.body;
  try {
    const out = await Orders.update(
      { quantity, promiseddate, priority },
      { where: { id } },
    );
    res.json({ error: false, message: 'Order updated' });
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: 'Db error' });
  }
}

module.exports = editOrder;
