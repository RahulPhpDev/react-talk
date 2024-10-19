// @flow 
import * as React from 'react';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import EmailRef from '../common/EmailRef';

 const Todos = (props) => {
    const [todos, setTodos] = React.useState([]);
    const inputRef = React.useRef('');
    const addTodos = () => {
        setTodos([...todos, {id: todos?.length, title:inputRef?.current?.value, isComplete:false}]); 
        inputRef.current.value = '';
    }
    const markAction = (index) => {
        console.log({index})
       todos[index].isComplete = !todos[index].isComplete;
       setTodos([...todos]);
    }
    return (
        <>
        <div className='flex'>
            <EmailRef type = "text" ref = {inputRef} classNames="w-3/4" placeholder="Enter your Todos" />
            <Button classNames="ml-2" clickHandler={addTodos}> Add Todo</Button>
        </div>
            <ShowToDos todos={todos} markAction={markAction} />
        </>
    );
};
export default Todos

function ShowToDos({todos, markAction}) {
console.log(todos)
    return (
        <>
            {todos.map( (todo, key) => (
                <ShowItem key = {key} index = {key} data = {todo} markAction={markAction}/>
            ))}
        </>
    )
}

function ShowItem({data,markAction, index}) {
 console.log(data)
    return (
        <div className='flex'><Checkbox clickHandler={() => markAction(index)}  />  <p className={`${data?.isComplete ? 'text-red-700' : ''} mt-1 ml-1`}>   {data?.title} </p> </div>
    )
}