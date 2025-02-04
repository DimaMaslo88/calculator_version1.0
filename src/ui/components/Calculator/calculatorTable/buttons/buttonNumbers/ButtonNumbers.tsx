import React  from 'react';

import style from 'styles/buttons.module.css'
import {buttonsArray, specialButtons} from "state/store";
import {ButtonsArrayType, SpecialButtonsType} from "types/types";
type ButtonNumbersType={
    onChange:(num:string)=>void
    onChangeSymbols:(sym:string)=>void
}
export const ButtonNumbers = ({onChange,onChangeSymbols}:ButtonNumbersType) => {

    // const numbers =[]
    // for(let i=0;i<=9;i+=1){
    //     numbers.unshift(i)
    // }

    return (
        <div className={style.buttonsContainer} >
            {specialButtons.map(({id,title}:SpecialButtonsType)=>(

                <button onClick={()=>onChangeSymbols(title)}
                    key={id}
                >{title}</button>
            ))}

            {buttonsArray.map(({id,title}:ButtonsArrayType)=>(

                <button
                    key={id} onClick={()=>onChange(title)} >
                    {title}
                </button>
            ))}

        </div>
    );
};

