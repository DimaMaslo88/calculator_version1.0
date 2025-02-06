import React from 'react';
import style from 'styles/buttons.module.css'
import {buttonsArray, signs, specialButtons} from "state/store";
import {universalSymbolsType} from "types/types";

type ButtonNumbersType = {
    onChange: (num: string) => void
    onChangeSymbols: (sym: string) => void
}
export const ButtonNumbers = ({onChange, onChangeSymbols}: ButtonNumbersType) => {

    // const numbers =[]
    // for(let i=0;i<=9;i+=1){
    //     numbers.unshift(i)
    // }

    return (
        <div className={style.buttonsContainer}>
            {specialButtons.map(({id, title}: universalSymbolsType) => (

                <button className={style.symbolButtons}
                    onClick={() => onChangeSymbols(title)}
                        key={id}
                >{title}</button>
            ))}

                {buttonsArray.map(({id, title}: universalSymbolsType) => (

                    <button className={style.numberButtons}
                        key={id} onClick={() => onChange(title)}>
                        {title}
                    </button>
                ))}
                {signs.map(({id, title}: universalSymbolsType) => (
                    <button className={style.buttonsSign}
                        key={id} onClick={() => onChange(title)}>
                        {title}
                    </button>
                ))}

        </div>
    );
};

