import React from 'react'
import TodoList from './TodoList'
import { render, fireEvent } from '@testing-library/react'

describe('<TodoList/>',()=>{
    const sampleTodos = [
        {
            id:1,
            text:'야호',
            done:true
        },
        {
            id:2,
            text:'씬텍스듸진다',
            done:true
        }
    ];

    it('받은거 잘 랜더 되냐',()=>{
        const { getByText } = render(<TodoList todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    });

    it('토글함수 리무브함수 잘 불러짐?',()=>{
        const onToggle = jest.fn();
        const onRemove = jest.fn();

        const { getByText, getAllByText } = render(
            <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
        );
        fireEvent.click(getByText(sampleTodos[0].text));
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);

        fireEvent.click(getAllByText('리무브')[0]);
        expect(onRemove).toBeCalledWith(sampleTodos[0].id);
    });


})