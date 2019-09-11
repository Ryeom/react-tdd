import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoForm from './TodoFrom';
/* TodoForm
input text 1개  |   button 1개
UI 구성 Test code 작성하기
*/

describe('<TodoForm/>',()=>{
    // SnapShot  #################################################################
    // render된 결과가 이전에 render된 결과와 일치하는지 확인하는 작업
    // it('snapshot 잘나옴?',()=>{
    //     const utils = render(<TodoForm/>);
    //     expect(utils.container).toMatchSnapshot()
    // })

    const setup = (props = {})=>{                   //자주 쓰는 것 반환
        const utils = render(<TodoForm {...props}/>);
        const {getByText, getByPlaceholderText} = utils;
        const input = getByPlaceholderText('니할일입력해라');
        const button = getByText('할일입력쓰');

        return {            //객체 반환
            ...utils,
            input,
            button
        };
    }

    // Right Render  #############################################################
    it('인풋하고 버튼 있음', () => { //제대로 render가 되고 있는지 확인
        //const { getByText, getByPlaceholderText } = render(<TodoForm/>);
        const {
            input,
            button
        } = setup();
        //getByPlaceholderText('니할일입력해라');
        expect(input).toBeTruthy();
        //getByText('할일입력쓰');
        expect(button).toBeTruthy();
    });
    // Test code 작성후 실제코드작성하기 ###########################################

    // Input Event ###############################################################
    it('인풋잇 바뀌어용', () => {
        //const { getByPlaceholderText } = render(<TodoForm />);
        //const input = getByPlaceholderText('니할일입력해라');
        const {
            input
        } = setup();
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });
    // Test code 작성후 실제코드작성하기

    // Submit Event #############################################################
    it('onInsert를 부르고 input을 clear한다', () => {
        const onInsert = jest.fn();
        //    jest에서 제공하는 mock함수
        //    이 함수가 호출 된다음 tobecalled/tobecalledwith같은 matcher를 사용해서
        //    함수가 호출됐는지 호출됐다면 어떤 파라미터로 호출됐는지 쉽게 확인가능!
        //const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert}/>);
        //const input = getByPlaceholderText('니할일입력해라');
        //const button = getByText('할일입력쓰');
        //e83c5163316f89bfbde7d9ab23ca2e25604af290
        const {
            input,
            button
        } = setup({
            onInsert
        });
        //여기서 바꾸기
        fireEvent.change(input, {
            target: {
                value: 'TDD배울꺼'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD배울꺼');
        //onInsert가 TDD배울꺼 파라미터를 호출했어야한다.
        expect(input).toHaveAttribute('value', '');
        //input submit을 했으니까 input이 비워져야 한다.

        //TODO
        // 1. input 수정하기
        // 2. button 클릭하기

    }) // Test code 작성후 실제코드작성하기

})