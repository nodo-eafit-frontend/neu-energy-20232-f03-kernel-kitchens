const fs = require('fs');

function generateRandomConsumptions() {
    const consumptions = [];
    for (let i = 0; i < 24; i++) {
        const randomConsumption = Math.floor(Math.random() * (200 - 1 + 1) + 1); // Generates a random number between 1 and 200
        consumptions.push(randomConsumption);
    }
    return consumptions;
}

function generateRandomData() {
    const years = [2022, 2023];
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const consumos = [];

    for (const year of years) {
        for (const month of months) {
            const daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();

            const monthData = {
                "año": year,
                "mes": month,
                "dias": []
            };

            for (let day = 1; day <= daysInMonth; day++) {
                const dayData = {
                    "dia": day,
                    "horas": generateRandomConsumptions()
                };

                monthData.dias.push(dayData);
            }

            consumos.push(monthData);
        }
    }

    const randomData = {
        "consumos": consumos
    };

    const jsonString = JSON.stringify(randomData, null, 2);

    fs.writeFile('randomData.json', jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Random data has been written to randomData.json');
        }
    });
}

generateRandomData();



function getMonthData(data, targetYear, targetMonth) {
    const targetMonthLower = targetMonth.toLowerCase();

    const foundData = data.consumos.find(consumo => {
        return consumo.year === targetYear && consumo.month.toLowerCase() === targetMonthLower;
    });

    return foundData ? foundData.days : null;
}

// Example: Get data for January 2022
const targetYear = 2022;
const targetMonth = "enero";
const january2022Data = getMonthData(yourData, targetYear, targetMonth);

if (january2022Data !== null) {
    console.log("Data found:");
    console.log(january2022Data);
} else {
    console.log(`No data found for ${targetMonth} ${targetYear}.`);
}

























