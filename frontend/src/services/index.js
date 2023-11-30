export const getDaysByMonthPicker = ({ year, month }) => {

    const myPromise = new Promise((resolve, reject) => {
        fetch(`http://localhost:4004/energy/${year}/${month}`)
        .then((raw) => raw.json())
        .then((data) => resolve(data.days))
        .catch((err) => reject(err));
    });

    return myPromise;
};
