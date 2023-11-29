const fs = require('fs');
const readJson = require('../../utils/json-update');
require('dotenv').config();
const { ENERGY_PATH } = process.env;

const readEnergy = (req, res) => {
  const targetYear = Number(req.params.year);
  const targetMonth = req.params.month;

  try {
    // Zona segura
    const consumo = readJson.leerJsonEnergia(ENERGY_PATH);

    const consumoMensual = consumo.consumos.find((items) => items.year === targetYear && items.month === targetMonth);

    // TODO:
    // 1: Crear método que retorne el valor de enregía más grande getMaxEnergy(consumoMensual): number
    // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(consumoMensual, maxEnergy): consumoMensualModified

    /*
    days: [
      {
        day: 1,
        consumption_hour: [
          { energy: 192, percent: 0.7 },
          { energy: 92, percent: 0.45 },
          { energy: 137, percent: 0.7 },
        ]
      },
      {...},
      {...}
    ] */


    const injectEnergyPercent = (consumoMensual, maxEnergy) => {
      const percent = (consumoMensual/maxEnergy) * 100
      const consumption_hour = hours.map((item) => {
        return {energy: item, percent: percent}
      })
      return consumption_hour
    } //devuelve energia y porcentaje de las 24h de un dia 

    if (consumoMensual) {
      res.status(200).send(consumoMensual);
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
