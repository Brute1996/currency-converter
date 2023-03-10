import axios from "axios";

export const getCurrentExchangeRate = async () => {
    try {
        const { data } = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
        return data
    } catch (error) {
        console.log('Something is wrong: ' + error);
    }
};

export const UAH = {
    txt: "Українська гривня",
    rate: 1,
    cc: 'UAH',
};