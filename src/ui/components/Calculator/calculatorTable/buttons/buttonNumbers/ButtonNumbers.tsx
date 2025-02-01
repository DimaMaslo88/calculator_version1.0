import React, { ChangeEvent} from 'react';
import { useState } from 'react';
import style from 'styles/buttons.module.css'
type ButtonNumbersType={
    onChange:(num:number)=>void
}
export const ButtonNumbers = ({onChange}:ButtonNumbersType) => {

    const numbers =[]
    for(let i=0;i<=9;i+=1){
        numbers.push(i)
    }

    return (
        <div className={style.buttonsContainer} >
            {numbers.map((number)=>(

                <button
                    key={number} onClick={()=>onChange(number)} >
                    {number}
                </button>
            ))}
        </div>
    );
};

