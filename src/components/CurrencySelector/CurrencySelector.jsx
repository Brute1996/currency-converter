import { CurrencySelectorOption } from "../CurrencySelectorOption/CurrencySelectorOption";

export const CurrencySelector = ({ handleCurrencySelect, currencyList, name, defaultValue }) => {

    return (
        <select
            defaultValue={defaultValue}
            name={name}
            onChange={handleCurrencySelect}
        >
            {currencyList.map(({ cc }) =>
                <CurrencySelectorOption key={cc} curr={cc} />
            )}
            
        </select>
    );
}