const db = require('../../models');

async function createWorkCenter(req, res) {
  const { name, code, capacity } = req.body;
  try {
    const newWorkCenter = await db.Workcenters.create({
      name,
      code,
      capacity,
    });
    console.log(newWorkCenter);
    res.json({
      error: false,
      message: `Work Center created. ID: ${newWorkCenter.id}`,
    });
  } catch (e) {
    res.json({ error: true, message: 'DB error' });
  }
}

module.exports = createWorkCenter;
