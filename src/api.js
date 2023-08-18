const url = 'https://api.rawg.io/api/games?key=';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const popularGamesURL = () => `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2022-04-03,2023-04-03&ordering=-rating&page_size=10`;
console.log(popularGamesURL())