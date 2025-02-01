import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";

export const CalculatorTable = () => {
    const [count, setCount] = useState(0)
    const onButtonClickHandler=(num:number)=>{
        debugger
        setCount(num)

    }
    return (
        <div>
            <div>
               <input type='text' value= {count}  readOnly={true}/>
            </div>
            <ButtonNumbers onChange={()=>onButtonClickHandler(count)}/>
        </div>
    );
};

