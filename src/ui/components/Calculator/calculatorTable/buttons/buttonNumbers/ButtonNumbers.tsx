import React,{useRef,MouseEvent} from 'react';
import style from 'styles/buttons.module.css'

export const ButtonNumbers = () => {
    const buttonRef=useRef(0)
    const numbers =[]
    for(let i=0;i<=9;i+=1){
        numbers.push(i)
    }
    const onButtonClickHandler=(e:MouseEvent<HTMLButtonElement>)=>{
console.log(e.currentTarget.value)
    }
    return (
        <div className={style.buttonsContainer} >
            {numbers.map((number)=>(

                <button key={number}onClick={onButtonClickHandler}>
                    {number}
                </button>
            ))}
        </div>
    );
};

