import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";
import style from 'styles/input.module.css'
import {buttonsArray} from "state/store";

export const CalculatorTable = () => {
    const [count, setCount] = useState<string>('')
    const [result, setResult] = useState<number>(0)

    const onButtonClickHandler = (num: string) => {
        if (num === '0') {
            setCount('0')
        } else if (num === '=') {
            setResult(eval(count).toString())

        } else {
            setCount(count + num)
        }


    }
    const onSpecialSymbolsClickHandler = (symbol: string) => {
        if (symbol === 'AC' && count === '') {
            setCount('0')
            setResult(0)
        } else if (symbol === 'AC' && count.length > 1) {
            setCount('')
            setResult(0)
        } else if (symbol === 'OFF') {
            setCount('')
            setResult(0)
        } else {
            return
        }


    }
    return (
        <div>
            <div className={style.inputContainer}>
                <input type='text' value={count} readOnly={true} className={style.input}/>
                {result}
            </div>
            <ButtonNumbers onChange={(pushNumber) => onButtonClickHandler(pushNumber)}
                           onChangeSymbols={onSpecialSymbolsClickHandler}/>

        </div>
    );
};

