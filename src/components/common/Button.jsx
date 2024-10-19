const Button = ({clickHandler, children, classNames, style}) => {
   
    return (
        <button className={`text-white bg-blue-700 rounded-lg  p-2.5 ${classNames} bg-`}
        onClick = {() => clickHandler()} style = {style}> {children} </button>
    )
}

export default Button;