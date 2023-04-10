import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';


const NumberField = (
    props: {
        value?: string | number | null | undefined;  
        name?: any; 
        onChange?: any; }
) => {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            className='custom-number'
            min={0}
            value={props.value}
            allowNegative = {false}
            placeholder='Enter amount'
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}

export default NumberField