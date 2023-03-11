import { MenuItem, Select } from "@mui/material";

export const CurrencySelector = ({ handleCurrencySelect, currencyList, name, defaultValue }) => {

    return (
        // <select
        //     defaultValue={defaultValue}
        //     name={name}
        //     onChange={handleCurrencySelect}
        // >
        //     {currencyList.map(({ cc }) =>
        //         <option key={cc} value={cc}>{cc}</option>
        //     )}
            
        // </select>
        <Select
            defaultValue={defaultValue}
            name={name}
            onChange={() => handleCurrencySelect}
        >
            {currencyList.map(({ cc }) =>
                <MenuItem key={cc} value={cc}>{cc}</MenuItem>
            )}
        </Select>
    );
};




