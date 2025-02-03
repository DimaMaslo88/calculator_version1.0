import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";
import style from 'styles/input.module.css'

export const CalculatorTable = () => {
    const [count, setCount] = useState<string>('')
    const [newCount, setNewCount] = useState<string>('')
    const onButtonClickHandler = (num: string) => {
        if (num === '0') {
            return setCount('0')
        } else {
            setCount(count + num)
        }


    }
    return (
        <div>
            <div className={style.inputContainer}>
                <input type='text' value={count} readOnly={true} className={style.input}/>

            </div>
            <ButtonNumbers onChange={(pushNumber) => onButtonClickHandler(pushNumber)}/>

        </div>
    );
};

