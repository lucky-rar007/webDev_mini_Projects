
function parseShipment(rawData) {
  const seen = new Set();
  const result = [];

  for (const item of rawData) {
    const parts = item.split("|");

    const sku = parts[0];
    if (seen.has(sku)) continue;
    seen.add(sku);

    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general";

    result.push({ sku, name, qty, expires, zone });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
      continue;
    }

    const exists = pantry.some(p => p.sku === item.sku);

    if (exists) {
      actions.push({ type: "restock", item });
    } else {
      actions.push({ type: "donate", item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// Optional runner (final step)
function processPantry(rawData, pantry) {
  const shipment = parseShipment(rawData);
  const pantryCopy = clonePantry(pantry);

  const actions = planRestock(pantryCopy, shipment);
  const grouped = groupByZone(actions);

  console.log(grouped);

  return grouped;
}