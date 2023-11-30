const getMaxEnergy = (consumoMensual) => {
  let maxEnergy = 0;
  // empieza en 0 la busqueda del dato mayor
  consumoMensual.days.forEach((day) => {
    // forEach es el iterador para cada elemento del array
    day.hours.forEach((energy) => {
      if (energy > maxEnergy) {
        maxEnergy = energy;
      }
    });
  });

  return maxEnergy;
};

const getConsuptionHour = (hours, maxEnergy) => {
  const consumption_hour = hours.map((energy) => {
    return { energy, percent: energy / maxEnergy };
  });

  return consumption_hour;
};

const injectEnergyPercent = (consumoMensual, maxEnergy) => {
  const daysModified = consumoMensual.days.map((item) => {
    const consumption_hour = getConsuptionHour(item.hours, maxEnergy);

    return { day: item.day, consumption_hour };
  });

  return daysModified;
};

module.exports = { getMaxEnergy, injectEnergyPercent };
