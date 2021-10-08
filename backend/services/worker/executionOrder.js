const { Orders, Infoorders } = require('../../models/index');
async function executionOrder(req, res) {
  const { orderId, userId } = req.body;
  const order = await Orders.findByPk(orderId, { raw: true });
  const workerOrder = await Infoorders.create(
    {
      employeesid: userId,
      ordersid: order.id,
      quatitycomplete: 0,
      quantitydefect: 0,
      status: 'Open',
    },
    { raw: true },
  );
  res.json({
    error: false,
    message: 'Order up to work',
    data: { orderId: workerOrder.id },
  });
}

module.exports = executionOrder;
