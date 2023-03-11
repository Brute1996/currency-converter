import { TextField, Typography } from "@mui/material";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

export const YouGiveInput = ({ handleAmountChange, handleCurrencySelect, youGiveValue, currencyList }) => {
    return (
        <div>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label={<Typography fontSize={20}>You give</Typography>}
                    
                type="number"
                name="youGive"
                autoComplete="hidden"
                onChange={handleAmountChange}
                value={youGiveValue}
            />

            <CurrencySelector
                name="youGiveSelect"
                defaultValue={'USD'}
                currencyList={currencyList}
                handleCurrencySelect={handleCurrencySelect}
            />
        </div>
    );
};