import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

export const YouGetInput = ({handleAmountChange, handleCurrencySelect, youGetValue, currencyList}) => {
    return (
        <div>
            <label>
                You get
                <input
                    type="number"
                    name="youGet"
                    autoComplete="hidden"
                    onChange={handleAmountChange}
                    value={youGetValue}
                />
            </label>

            <CurrencySelector
                name="youGetSelect"
                defaultValue={'UAH'}
                currencyList={currencyList}
                handleCurrencySelect={handleCurrencySelect}
            />
        </div>
    );
};