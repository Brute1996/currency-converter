import { YouGiveInput } from "../YouGiveInput/YouGiveInput";
import { YouGetInput } from "../YouGetInput/YouGetInput";
import { useEffect, useState } from "react";
import { CurrencyConverterWrapper } from "./CurrencyConverterWrapper.styled";

export const CurrencyConverter = ({ currencyList }) => {
    const [youGiveValue, setYouGiveValue] = useState(findCurrRate('UAH'));
    const [youGetValue, setYouGetValue] = useState(findCurrRate('USD'));
    const [youGiveSelectedCurrRate, setYouGiveSelectedCurrRate] = useState(youGetValue);
    const [youGetSelectedCurrRate, setYouGetSelectedCurrRate] = useState(youGiveValue);

    function findCurrRate(curr) {
        return currencyList.find(({ cc }) => cc === curr).rate
    }


    useEffect(() => {
        if (!youGiveSelectedCurrRate || !youGetSelectedCurrRate) {
            return
        }
        
        const amount = ((youGiveValue * youGiveSelectedCurrRate) / youGetSelectedCurrRate);
        
        setYouGetValue(amount.toFixed(4))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [youGetSelectedCurrRate]);


    useEffect(() => {
        if (!youGiveSelectedCurrRate || !youGetSelectedCurrRate) {
            return
        }
       
        const amount = ((youGiveValue * youGiveSelectedCurrRate) / youGetSelectedCurrRate);

        
        setYouGetValue(amount.toFixed(4))


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [youGiveSelectedCurrRate]);


    const handleCurrencySelect = (e) => {

        const { value, name } = e.target;
        const selectedCurrency = value;
        const currencySelectorName = name;

        switch (currencySelectorName) {

            case 'youGiveSelect':
                setYouGiveSelectedCurrRate(findCurrRate(selectedCurrency));
                return;

            case 'youGetSelect':
                setYouGetSelectedCurrRate(findCurrRate(selectedCurrency));
                return;

            default:
                return;
        };
    }


    const handleAmountChange = (e) => {
        const { name, value } = e.target;
        const inputName = name;
        let inputValue = parseFloat(value);

        if (!inputValue) inputValue = 0; 
   
        switch (inputName) {
            case "youGive":
                setYouGiveValue(inputValue);
                setYouGetValue(((inputValue * youGiveSelectedCurrRate) / youGetSelectedCurrRate).toFixed(4));
                return;
            
            case "youGet":
                setYouGetValue(inputValue);
                setYouGiveValue(((youGetSelectedCurrRate / youGiveSelectedCurrRate) * inputValue).toFixed(4));
                return;
            
            default:
                return;
        }
    }

    
    return (
        <CurrencyConverterWrapper>
            <YouGiveInput
                handleAmountChange={handleAmountChange}
                handleCurrencySelect={handleCurrencySelect}
                youGiveValue={youGiveValue}
                currencyList={currencyList}
            />
            
            <YouGetInput
                handleAmountChange={handleAmountChange}
                handleCurrencySelect={handleCurrencySelect}
                youGetValue={youGetValue}
                currencyList={currencyList} 
                />
        </CurrencyConverterWrapper>
    );
};