import React,{ useState, useCallback, useRef } from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoFrom';
const TodoApp = ()=> {
    const [todos, setTodos] = useState([
        {
            id:1,
            text:'야도란',
            done:true
        },
        {
            id:2,
            text:'초가스',
            done:true
        }
    ]);

    const nextId = useRef(3);
    const onInsert = useCallback(
        text=>{
            setTodos(
                todos.concat({
                    id:nextId.current,
                    text,
                    done:false
                })
            );
            nextId.current += 1
        },
        [todos]
    )
    const onToggle = useCallback(
        id=>(
            setTodos(
                todos.map(todo=>
                    todo.id ===id ? { ...todo,done: !todo.done}:todo
                )
            )
        ),
        [todos]
    );

    const onRemove = useCallback(
        id=>{
            setTodos(todos.filter(todo=>todo.id !==id));
        },
        [todos]
    );
    return (
        <div>
            <TodoForm onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>            
        </div>
    );

}
export default TodoApp