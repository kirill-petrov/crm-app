const { Infoorders, Orders, Items } = require('../../models/index');
const { Op } = require('sequelize');

async function getWorkerOrder(req, res) {
  Orders.hasMany(Infoorders, { foreignKey: 'ordersid' });
  Infoorders.belongsTo(Orders, { foreignKey: 'ordersid' });
  Items.hasMany(Orders, { foreignKey: 'itemsid' });
  Orders.belongsTo(Items, { foreignKey: 'itemsid' });
  const count = [1, 2, 3];
  const { userId, wcCode } = req.params;
  console.log('Get order worker find');
  const orderInfo = await Infoorders.findOne({
    where: { employeesid: userId, status: 'Open' },
    include: [{ model: Orders, include: [{ model: Items }] }],
    raw: true,
  });
  if (orderInfo) {
    count.forEach((el) => {
      if (Object.hasOwnProperty.call(orderInfo, `Order.Item.workcenter${el}`)) {
        if (orderInfo[`Order.Item.workcenter${el}`] !== wcCode) {
          delete orderInfo[`Order.Item.workcenter${el}`];
          delete orderInfo[`Order.Item.descrroute${el}`];
          delete orderInfo[`Order.Item.cycletime${el}`];
        } else {
          orderInfo[`Order.Item.workcenter`] =
            orderInfo[`Order.Item.workcenter${el}`];
          orderInfo[`Order.Item.descrroute`] =
            orderInfo[`Order.Item.descrroute${el}`];
          orderInfo[`Order.Item.cycletime`] = orderInfo[`Order.Item.cycletime${el}`];
          delete orderInfo[`Order.Item.workcenter${el}`];
          delete orderInfo[`Order.Item.descrroute${el}`];
          delete orderInfo[`Order.Item.cycletime${el}`];
        }
      }
    });
    res.json({
      error: false,
      message: `Order executed succsessfull. ID: ${orderInfo.id}`,
      data: orderInfo,
    });
  } else {
    res.json({
      error: false,
      message: 'No active orders',
    });
  }
}

module.exports = getWorkerOrder;
