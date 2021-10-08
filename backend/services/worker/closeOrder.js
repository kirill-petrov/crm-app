const { Infoorders } = require('../../models/index');
async function closeOrder(req, res) {
  console.log(req.body);
  const { pk } = req.body;
  const close = await Infoorders.update({ status: 'Closed' }, { where: { id: pk } });
  res.json({
    error: false,
    message: 'Order closed',
  });
}

module.exports = closeOrder;
