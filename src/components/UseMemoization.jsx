import { useCallback, useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import UseMemoizationSum from "./UseMemoizationSum";
const UseMemoization = () => {
    const colorArr = ['red', 'gray', 'green', 'black'];

    const [firstNum, setFirstNum] = useState(3);
    const [secondNum, setSecondNum] = useState(6);
    const [color, setColor] = useState('blue');
    function calculation() {
        console.log('calucation trigger')
        return +firstNum + +secondNum;
    }

    const sum =  useCallback(() => calculation(), [firstNum]) ;
 
    // debugger;
    const changeColor = () => {
       const randomColor =  colorArr[Math.floor(Math.random() * colorArr.length)];
       console.log(randomColor)
        setColor(randomColor);
    }

    return (
        <div className="w-full">
            <Button clickHandler={changeColor} style={{backgroundColor: color}}> Change Color </Button>
             Use Memoization
             <div className="mt-5">
                 <Input type ="number" value = {firstNum}  onChange={e => setFirstNum(e?.target.value) } />
                 <UseMemoizationSum sum = {sum} />
           </div>
        </div>
    )
}

export default UseMemoization;