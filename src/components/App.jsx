import { AppBar, Container, Typography } from "@mui/material"
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
            <AppBar position='relative'>
                <Container>
                    <header>
                        <Typography fontSize={48} variant="h1" gutterBottom>Currency converter
                            <span style={{ fontSize: '32px' }}> by Serhii Cherenkov</span>
                        </Typography>
                        <HeaderCurrencyRateList currencyList={currencyList} />
                    </header>
                </Container>
            </AppBar>
            <Container>
                <main>
                    <CurrencyConverter currencyList={currencyList} />
                </main>
            </Container>
        </>
    );
};