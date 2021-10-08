const { Orders } = require('../../models/index');

async function showOrdersList(req, res) {
  try {
    const ordersList = await Orders.findAll();
    res.json({ error: false, message: ordersList });
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: 'DB error, try again' });
  }
}

module.exports = showOrdersList;
