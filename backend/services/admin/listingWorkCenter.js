const { Workcenters } = require('../../models');

async function listingWorkCenters(req, res) {
  try {
    const db = await Workcenters.findAll();
    res.status(200).json({ error: false, message: db });
  } catch (e) {
    res.status(404).json({ error: true, message: e.message });
  }
}

module.exports = listingWorkCenters;
