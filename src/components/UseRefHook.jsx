
import { useEffect, useRef, useState } from "react";
import EmailRef from "./common/EmailRef";
import Input from "./common/Input";
const UseRefHook = () => {
    const [firstName, setFirstName] = useState('');
    const emailRef = useRef();

    useEffect(() => {
// if length > 5, jump to email
        if (firstName?.length > 5) {
            emailRef?.current?.focus();
        }
    }, [firstName])

    return (
        <div className="w-full">
            <h2 className="font-bold"> Registration Form </h2>
            <span className="italic text-red-400"> After 5 character in Name, input should be focused on email</span>
            <div className="m-2"> 
                <label htmlFor="First Name "> First Name: </label>
                 <Input value = {firstName} onChange = {(e) => setFirstName(e?.target?.value)} type = "text" placeholder="Your Name only 5 character allowed"classNames="p-4 text-lg" />
            </div>
            <div  className="m-2 mt-4"> 
                <label htmlFor="First Name "> Email Name: </label>
                {/* <input
                    type="email"
                    name="email"
                    id="email"
                    ref ={emailRef}
                    class={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 caret-red-900`}
                    placeholder="Enter email"
              /> */}
              <EmailRef  type = "email" placeholder="Email" classNames="caret-red-900" />
            </div>
           
        </div>
    )
}

export default UseRefHook;