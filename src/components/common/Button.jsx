const Button = ({clickHandler, children, classNames}) => {
   
    return (
        <button className={`text-white bg-blue-700 rounded-lg  p-2.5 ${classNames}`}
        onClick = {() => clickHandler()}> {children} </button>
    )
}

export default Button;