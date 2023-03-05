
const getTemperature = +prompt('Введите температуру в градусах Цельсия: ');

function convertToFahrenheit(celsius) {
    return ((9 / 5) * celsius + 32);
}

alert(`Цельсий: ${getTemperature}, Фаренгейт: ${convertToFahrenheit(getTemperature).toFixed(1)}`);