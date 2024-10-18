import { useState } from 'react';

export default function StateComponent() {
    // let firstName = 'Loreum';

    const [firstName, setFirstName]  =  useState('Loreum')

    setTimeout( () => {
        console.log('trigger', Math.random()* 10)
        
        setFirstName(() => {
           const randomNum =  Math.random()* 10;
           if (randomNum > 5) {
                return 'Peter above 2'
           }
            return 'Peter below 2'
        })
    }, 2000)
    return (
        <h1> {firstName} </h1>
    )
}