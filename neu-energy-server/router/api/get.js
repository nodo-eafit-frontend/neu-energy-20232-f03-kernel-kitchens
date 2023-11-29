const fs = require('fs');
const readJson = require('../../utils/json-update');
const { get } = require('http');
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

    const getMaxEnergy = (consumoMensual) => {
      let maxEnergy = 0;
      // empieza en 0 la busqueda del dato mayor
      consumoMensual.forEach((item) => {
      // forEach es el iterador para cada elemento del array
        if (item.energy > maxEnergy) {
          maxEnergy = item.energy;
        }
      });
      return maxEnergy;
    };



    // 2: Modificar la respuesta de las horas, agregando el atributo de porcentaje injectEnergyPercent(consumoMensual, maxEnergy): consumoMensualModified
     const injectEnergyPercent = (consumoMensual, maxEnergy) => {
       consumoMensual.forEach((item) => {
        item.percent = (item.energy / maxEnergy) * 100;
      });
      return consumoMensual;
     };
     //dudas de si esta bien

    
/*     days: [
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
    ]  */


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
