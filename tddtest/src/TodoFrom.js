import React, { useState, useCallback } from 'react'
const TodoForm = ({user, onInsert})=>{
    const [ value, setValue ] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e=>{
            onInsert(value);
            setValue('');
            e.preventDefault(); //새로고침 방지
        }
    );

    return (
    <form onSubmit={onSubmit}>
        <h1>{user}</h1>
        <input 
            placeholder='니할일입력해라'
            value={value}
            onChange={onChange}
        />
        <button type='submit'>할일입력쓰</button>
    </form>
    )

}

export default TodoForm