import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";

export const CalculatorTable = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                {count}
            </div>
            <ButtonNumbers/>
        </div>
    );
};

