/* eslint-disable array-callback-return */
import { Typography } from "@mui/material";
import { HeaderCurrencyRateItem } from "../HeaderCurrencyRateItem/HeaderCurrencyRateItem"
import { HeaderCurrencyRateListWrapper } from "./HeaderCurrencyRateListWrapper";

export const HeaderCurrencyRateList = ({ currencyList }) => {
    return (
        
        <div>
            <Typography variant="h2" fontWeight={500} fontSize={18} gutterBottom>Actual NBU currency exchange rates:</Typography>
            <HeaderCurrencyRateListWrapper>
                {currencyList.map(({ cc, rate }) => {
                    if (cc === 'EUR' || cc === 'USD') return <HeaderCurrencyRateItem key={cc} curr={cc} rate={rate} />
                })}
            </HeaderCurrencyRateListWrapper>
        </div>
    );
};