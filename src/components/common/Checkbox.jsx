const Checkbox = ({ name, placeholder, classNames, type,value, clickHandler }) => {
    return (
      <>
      {/* <input type="checkbox" class="appearance-none checked:bg-blue-500 ..." /> */}

        <input
          type="checkbox"
          name={name}
          id={name}
          value = {value}
          onClick={clickHandler}
          className={`default:ring-2  ${classNames}`}
          placeholder={placeholder}
        />
      </>
    );
  };
  
  export default Checkbox;
  