import { YouGiveInput } from "../YouGiveInput/YouGiveInput";
import { YouGetInput } from "../YouGetInput/YouGetInput";
import { useEffect, useState } from "react";

export const CurrencyConverter = ({ currencyList }) => {
    const [youGiveValue, setYouGiveValue] = useState('');
    const [youGetValue, setYouGetValue] = useState('');
    const [youGiveSelectedCurrRate, setYouGiveSelectedCurrRate] = useState(0);
    const [youGetSelectedCurrRate, setYouGetSelectedCurrRate] = useState(0);

    const findCurrRate = (curr) => {
        return currencyList.find(({ cc }) => cc === curr).rate
    }

    useEffect(() => {
        if (!currencyList) {
            return
        }
        
        setYouGiveSelectedCurrRate(findCurrRate('USD'));
        setYouGetSelectedCurrRate(findCurrRate('UAH'));
        
        setYouGiveValue(youGetSelectedCurrRate)
        setYouGetValue(youGiveSelectedCurrRate.toFixed(4))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currencyList])
    

    useEffect(() => {
        if (!youGiveSelectedCurrRate) {
            return
        }

        const amount = ((youGiveValue * youGiveSelectedCurrRate) / youGetSelectedCurrRate);
        
        setYouGetValue(amount.toFixed(4))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [youGetSelectedCurrRate]);


    useEffect(() => {
        if (!youGiveSelectedCurrRate) {
            return
        }
        
        const amount = ((youGiveValue * youGiveSelectedCurrRate) / youGetSelectedCurrRate);

        
        setYouGetValue(amount.toFixed(4))


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [youGiveSelectedCurrRate]);


    const handleCurrencySelect = (e) => {

        const { value, name } = e.target
        
        const selectedCurrency = value
        const currencySelectorName = name

        switch (currencySelectorName) {

            case 'youGiveSelect':
                setYouGiveSelectedCurrRate(findCurrRate(selectedCurrency))
                return

            case 'youGetSelect':
                setYouGetSelectedCurrRate(findCurrRate(selectedCurrency))
                return

            default:
                return
        };
    }


    const handleAmountChange = (e) => {
        const inputName = e.target.name
        const inputValue = parseFloat(e.target.value);
   
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
        <div>
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
        </div>
    );
};