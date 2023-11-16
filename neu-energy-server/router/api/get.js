const fs = require('fs');

const readEnergy = (req, res) => {
  const targetYear = Number(req.params.year);
  const targetMonth = req.params.month;

  // TODO: Agreguen RECIPE_PATH
  fs.readFile('./dataEnergy/energyData.json', (err, data) => {
    if (err) {
      const msgError = 'Error reading file: ' + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else {
      const consumo = JSON.parse(data);

      const consumoMensual = consumo.consumos.find((items) => items.year === targetYear && items.month === targetMonth);

      res.status(200).send(consumoMensual);
    }
  });
};

module.exports = { readEnergy };
