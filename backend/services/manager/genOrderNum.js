const { sequelize } = require('../../models/index');
async function genOrderNum(req, res) {
  try {
    const [results, metadata] = await sequelize.query(
      'SELECT last_value FROM "Orders_id_seq"',
    );
    const num = +results[0].last_value + 1;
    res.json({
      error: false,
      message: 'Random order num generated',
      data: `ORN-${num}`,
    });
  } catch (e) {
    res.json({ error: true, message: 'Random order num error', data: `ERROR!` });
  }
}

module.exports = genOrderNum;
