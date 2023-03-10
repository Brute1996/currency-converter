/* eslint-disable array-callback-return */
import { HeaderCurrencyRateItem } from "../HeaderCurrencyRateItem/HeaderCurrencyRateItem"

export const HeaderCurrencyRateList = ({currencyList}) => {
    return (
        <ul>
            {currencyList.map(({ cc, rate }) => {
                if (cc === 'EUR' || cc === 'USD') return <HeaderCurrencyRateItem curr={cc} rate={rate} />
            })}
        </ul>
    )
}