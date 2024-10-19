// @flow 
import * as React from 'react';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import EmailRef from '../common/EmailRef';

function reducerFunction(state, action) {
    switch(action.type) {
        case 'CHANGE_TITLE': {
            return {
                ...state,
                title: 'Add List'
            }
        }
        case 'ADD_TO_DO':
            return {...state,
               todos: [
                ...state?.todos,
                    {title: action?.title,
                    isComplete:false}
                ]
            };
        case 'MARK_COMPLETED': {
            console.log(state)
             state.todos[action?.index].isComplete = !state?.todos[action?.index].isComplete;
             return {...state}
        }
        default:
            return []
        
    }
}
 const Todos = (props) => {
    const [state, dispatch] = React.useReducer(reducerFunction , {todos: [] , title: 'Add Todos'} )
    // const [title, setTitle] = React.useState('Add Todos')
    // const [todos, setTodos] = React.useState([]);
    const inputRef = React.useRef('');
    const addTodos = () => {
         dispatch({type: 'ADD_TO_DO',title: inputRef?.current?.value })
        // setTodos([...todos, {id: todos?.length, title:inputRef?.current?.value, isComplete:false}]); 
        inputRef.current.value = '';
    }
    const markAction = (index) => {
        dispatch({type: 'MARK_COMPLETED',index: index })
        // console.log({index})
    //    todos[index].isComplete = !todos[index].isComplete;
    //    setTodos([...todos]);
    }
    return (
        <>
        <div className='flex mb-2'>
       <h1 className='text-xl font-bold mr-5'> {state?.title} </h1>
       <Button clickHandler ={() => dispatch({type: 'CHANGE_TITLE'})}> Change Title</Button>
       </div>
        <div className='flex'>
            
            <EmailRef type = "text" ref = {inputRef} classNames="w-3/4" placeholder="Enter your Todos" />
            <Button classNames="ml-2" clickHandler={addTodos}> Add Todo</Button>
        </div>
            <ShowToDos todos={state?.todos} markAction={markAction} />
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