import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";

export const CalculatorTable = () => {
    const [count, setCount] = useState<string>('')

    const onButtonClickHandler=(num:number)=>{

        setCount(count+num)

    }
    return (
        <div>
            <div>
               <input type='text' value= {count}  readOnly={true}/>
            </div>
            <ButtonNumbers onChange={(pushNumber)=>onButtonClickHandler(pushNumber)}/>

        </div>
    );
};

