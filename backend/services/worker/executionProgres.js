const { Infoorders } = require('../../models/index');
async function executionProgres(req, res) {
  const { num, type, pk } = req.body;
  console.log(req.body);
  const order = await Infoorders.findByPk(pk, {
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'employeesid', 'id', 'status', 'ordersid'],
    },
  });
  console.log(order);
  type === 'good'
    ? (order.quantitycomplete += +num)
    : (order.quantitydefect += +num);
  const update = await Infoorders.update({ ...order }, { where: { id: pk } });
  res.json({ error: false, message: 'Updated', data: order });
}

module.exports = executionProgres;
