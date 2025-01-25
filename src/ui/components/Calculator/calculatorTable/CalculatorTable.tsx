import React, {useState} from 'react';

export const CalculatorTable = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div>
                {count}
            </div>

        </div>
    );
};

