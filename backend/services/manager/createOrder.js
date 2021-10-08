const { Orders } = require('../../models');

async function createOrder(req, res) {
  const { itemId, itemName, partnumber, order, quantity, date, priority } = req.body;
  if (itemId && itemName && partnumber && order && quantity && date && priority) {
    try {
      const item = await Orders.create(
        {
          itemname: itemName,
          itempartnum: partnumber,
          itemsid: itemId,
          number: order,
          quantity,
          promiseddate: date,
          priority,
          raw: true,
        },
        { raw: true },
      );
      res.json({ error: false, message: `Order created: ID: ${item.id}` });
    } catch (e) {
      console.log(e);
      res.json({ error: true, message: 'DB error, try again' });
    }
  } else {
    res.json({ error: true, message: 'All fields must be require' });
  }
}

module.exports = createOrder;
