import React, {useState} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";
import style from 'styles/input.module.css'
import {buttonsArray} from "state/store";

export const CalculatorTable = () => {
    const [count, setCount] = useState<string>('')
    const [result, setResult] = useState<string>('0')

    const onButtonClickHandler = (num: string) => {
        if (num === '0') {
            setCount('0')
        } else {
            setCount(count + num)
        }

        if (num) {
            // return alert("Hello")
           return  setResult(eval(count + num).toString())
        }
    }
    const onSpecialSymbolsClickHandler = (symbol: string) => {
        if (symbol === 'AC') {
            setCount('')
            setResult('0')
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

