import { TextField, Typography } from "@mui/material";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

export const YouGetInput = ({ handleAmountChange, handleCurrencySelect, youGetValue, currencyList }) => {
    return (
        <div>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label={<Typography fontSize={20}>You get</Typography>}

                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                name="youGet"
                autoComplete="hidden"
                onChange={handleAmountChange}
                value={youGetValue}
            />

            <CurrencySelector
                name="youGetSelect"
                defaultValue='UAH'
                currencyList={currencyList}
                handleCurrencySelect={handleCurrencySelect}
            />
        </div>
    );
};