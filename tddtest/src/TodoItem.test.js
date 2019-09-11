import React from 'react'
import { render } from '@testing-library/react'
import TodoItem from './TodoItem'
import { fireEvent } from '@testing-library/react/dist' // 이거고치기
describe('<TodoItem/>',()=>{
    const sampleTodo = {
        id : 1,
        text : '야호',
        done : false,
    };

    const setup = (props={})=>{
        const initialProps = { todo : sampleTodo };
        const utils = render(<TodoItem {...initialProps} {...props}/>);
        
        const { getByText } = utils;
        const todo = props.todo || initialProps.todo;
        const span = getByText(todo.text);
        const button = getByText('리무브');
        return {
            ...utils,
            span,
            button
        };
    };

    it('스판이랑 바톤잉냐',()=>{
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('스판이 트루일때',()=>{
        const { span } = setup({todo:{...sampleTodo,done:true}});
        expect(span).toHaveStyle('text-decoration:line-through;');
        //해당 DOM에 특정 style이 있는지 쉽게 확인 가능
    });

    it('스판이 뽈쑤일때',()=>{
        const { span } = setup({todo:{...sampleTodo,done:false}});
        expect(span).not.toHaveStyle('text-decoration:line-through;');
    });


    // click Event #############################################################
    it('토글 함수 불름',()=>{
        const onToggle = jest.fn();
        const { span } = setup({onToggle});
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sampleTodo.id);
    });

    it('온리무브 부름',()=>{
        const onRemove = jest.fn();
        const { button } = setup({onRemove});
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    })
})