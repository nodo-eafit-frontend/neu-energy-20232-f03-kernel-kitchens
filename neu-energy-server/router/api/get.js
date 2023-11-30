const readJson = require('../../utils/json-update');
require('dotenv').config();
const { ENERGY_PATH } = process.env;
const { getMaxEnergy, injectEnergyPercent } = require('../../utils/energy');

const readEnergy = (req, res) => {
  const targetYear = Number(req.params.year);
  const targetMonth = req.params.month;

  try {
    // Zona segura
    const consumo = readJson.leerJsonEnergia(ENERGY_PATH);
    const consumoMensual = consumo.consumos.find((items) => items.year === targetYear && items.month === targetMonth);

    // 1: Crear método que retorne el valor de enregía más grande getMaxEnergy(consumoMensual): number
    const maxEnergy = getMaxEnergy(consumoMensual);

    // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(consumoMensual, maxEnergy): consumoMensualModified
    const days = injectEnergyPercent(consumoMensual, maxEnergy);
    console.log(days);
    if (days?.length) {
      res.status(200).send({ year: targetYear, month: targetMonth, days });
    } else {
      res.status(404).send({});
    }
  } catch (error) {
    // Atrapamos el error
    console.error(error);
    res.status(500).send({});
  }
};

module.exports = { readEnergy };
