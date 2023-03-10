import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

export const YouGiveInput = ({ handleAmountChange, handleCurrencySelect, youGiveValue, currencyList }) => {
    return (
        <div>
            <label >
                You give
                <input
                    type="number"
                    name="youGive"
                    autoComplete="hidden"
                    onChange={handleAmountChange}
                    value={youGiveValue}
                />
            </label>

            <CurrencySelector
                name="youGiveSelect"
                defaultValue={'USD'}
                currencyList={currencyList}
                handleCurrencySelect={handleCurrencySelect}
            />
        </div>
    );
};