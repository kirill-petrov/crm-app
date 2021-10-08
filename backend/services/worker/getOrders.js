const {
  Orders,
  Items,
  Infoorders,
  Employees,
  Workcenters,
} = require('../../models/index');
const { Op } = require('sequelize');

async function getOrders(req, res) {
  const { wcCode, wcId } = req.params;
  const count = [1, 2, 3];
  console.log(req.params);
  Items.hasMany(Orders, { foreignKey: 'itemsid' });
  Orders.belongsTo(Items, { foreignKey: 'itemsid' });
  Orders.hasMany(Infoorders, { foreignKey: 'ordersid' });
  Infoorders.belongsTo(Orders, { foreignKey: 'ordersid' });
  Employees.hasMany(Infoorders, { foreignKey: 'employeesid' });
  Infoorders.belongsTo(Employees, { foreignKey: 'employeesid' });
  Workcenters.hasMany(Employees, { foreignKey: 'workcenterid' });
  Employees.belongsTo(Workcenters, { foreignKey: 'workcenterid' });
  try {
    const orders = await Orders.findAll({
      where: {
        [Op.or]: [{ status: 'Created' }, { status: 'Open' }],
      },
      raw: true,
      order: [['priority', 'DESC']],
      include: [
        {
          model: Items,
          where: {
            [Op.or]: [
              { workcenter1: wcCode },
              { workcenter2: wcCode },
              { workcenter3: wcCode },
            ],
          },
        },
      ],
    });
    orders.forEach((_, i) => {
      count.forEach((el) => {
        if (Object.hasOwnProperty.call(orders[i], `Item.workcenter${el}`)) {
          if (orders[i][`Item.workcenter${el}`] !== wcCode) {
            delete orders[i][`Item.workcenter${el}`];
            delete orders[i][`Item.descrroute${el}`];
            delete orders[i][`Item.cycletime${el}`];
          } else {
            orders[i][`Item.workcenter`] = orders[i][`Item.workcenter${el}`];
            orders[i][`Item.descrroute`] = orders[i][`Item.descrroute${el}`];
            orders[i][`Item.cycletime`] = orders[i][`Item.cycletime${el}`];
            delete orders[i][`Item.workcenter${el}`];
            delete orders[i][`Item.descrroute${el}`];
            delete orders[i][`Item.cycletime${el}`];
          }
        }
      });
    });
    const allInfoOrders = await Infoorders.findAll({
      raw: true,
      include: [
        { model: Employees, include: [{ model: Workcenters }] },
        { model: Orders },
      ],
    });
    const avaliableOrdersIndex = [];
    const avaliableOrders = [];
    orders.forEach((order, i) => {
      const index = allInfoOrders.findIndex(
        (el) =>
          el['Order.id'] === order.id &&
          el['Employee.Workcenter.code'] === order['Item.workcenter'],
      );
      if (index === -1) {
        avaliableOrdersIndex.push(i);
      }
    });
    avaliableOrdersIndex.forEach((index) => {
      avaliableOrders.push(orders[index]);
    });
    res.json({ error: false, message: avaliableOrders });
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: 'DB error, try again' });
  }
}

module.exports = getOrders;
