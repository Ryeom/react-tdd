import React from 'react'
import TodoApp from './TodoApp'
import { render, fireEvent } from '@testing-library/react'


describe('<TodoApp/>',()=>{
    it('1. todoform/todolist 잘 랜더링 되는가',()=>{
        const { getByText, getByTestId } = render(<TodoApp/>);
        getByText('할일입력쓰');
        getByTestId('TodoList히히');
    });

    it('2. todo에 기본값을 임시로 넣고 랜더링이 잘되는가',()=>{
        const { getByText } = render(<TodoApp/>);
        getByText('야도란');
        getByText('초가스');
    });
    it('3. 새 항목을 만들어 넣어보자',()=>{
        const { getByPlaceholderText, getByText } = render(<TodoApp/>);
        fireEvent.change(getByPlaceholderText('니할일입력해라'),{
            target:{
                value:'긔긔'
            }
        });
        fireEvent.click(getByText('할일입력쓰'));
        getByText('긔긔');
    });
    it('4. 토글함수 글자에 선긋기가 잘 작동하는가',()=>{
        const { getByText } = render(<TodoApp/>);
        const todoText = getByText('야도란');

        expect(todoText).toHaveStyle('text-decoration : line-through; ');
        fireEvent.click(todoText);
        expect(todoText).not.toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through;');
    });

    it('5. 삭제함수가 잘 작동하는가',()=>{
        const { getByText } =render(<TodoApp/>);
        const todoText = getByText('초가스');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        expect(todoText).not.toBeInTheDocument();//페이지에서 사라져라
    });
    // it('1. todoform/todolist 잘 랜더링 되는가',()=>{
            
    // });
    // it('2. todo에 기본값을 임시로 넣고 랜더링이 잘되는가',()=>{
            
    // });
    // it('3. 새 항목을 만들어 넣어보자',()=>{
            
    // });
    // it('4. 토글함수 글자에 선긋기가 잘 작동하는가',()=>{
            
    // });
    // it('5. 삭제함수가 잘 작동하는가',()=>{
            
    // });
   
})