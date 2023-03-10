import { useEffect, useState } from "react"
import { getCurrentExchangeRate, UAH } from "./api"
import { CurrencyConverter } from "./CurrencyConverter/CurrencyConverter"
import { HeaderCurrencyRateList } from "./HeaderCurrencyRateList/HeaderCurrencyRateList"

export const App = () => {
    const [currencyList, setCurrencyList] = useState(null)



    useEffect(() => {
        getCurrentExchangeRate()
            .then(response => setCurrencyList([...response, UAH]))
            .catch(error => console.log(error))
    }, [])



    if (!currencyList) {
        return   
    }

    currencyList.sort((firstCurr, secondCurr) => firstCurr.cc.localeCompare(secondCurr.cc));

    
    return (
        <>
            <header>
                <HeaderCurrencyRateList currencyList={currencyList}/>
            </header>
            <main>
                <CurrencyConverter currencyList={currencyList} />
            </main>
            
        </>
    );
}