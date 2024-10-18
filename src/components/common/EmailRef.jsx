import React from 'react';


const EmailRef = React.forwardRef( ({ name, placeholder, classNames, type,value, onChange }, ref) => {
    return (
      <>
        <input
          type={type}
          name={name}
          id={name}
          value = {value}
          onChange={onChange}
          ref ={ref}
          class={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classNames}`}
          placeholder={placeholder}
        />
      </>
    );
  });
  
  export default EmailRef;
  