//자바스크립트처럼 인풋의 값에 따라 인풋창 색 바꾸기!
//rcc 엔터
import React, { Component } from 'react';
import './RefSample.css';

class RefClassSample extends Component {   
    // ref생성
    input = React.createRef();
    state = {
        password:'',
        clicked: false,
        validated: false
    }
    handleChange = (e)=>{
        this.setState({
            // password: e.target.value                 //value값 뺏으니 지워주고 
            password: this.input.current.value          //current가 꼭 붙어야함!
        })
    }
    //버튼 클릭시 실행
    handleButtonClick = ()=>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'                //맞으면 true 아니면 false가 담길거임
            //일치연산자 써줘서 맞으면 true 반환/ 아닐때 false반환 !!
            // === : 일치연산자 -> this.state.password얘와 '0000'얘가 같으면(password가 0000이면) true / 아니면 false(boolean데이터로 바꿈)
        })
        //돔요소 접긍능 ref.current
        //this.input이 ref임
        // 이 input은 {current: input}에 담겨있어서 current가 꼭 붙어야함! (바로 접근 불가능)   => 콘솔에 찍어서 보기
        console.log(this.input);
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                {/* 선택하려는 DOM요소의 ref속성으로 지정해줌 */}
                <input type="password"
                ref={this.input}
                onChange={this.handleChange} 
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />

                {/* ref={this.input} 넣어주고 value={this.state.password} input안에 속성 value 지워주기 */}
                {/* this.state.clicked가 true면 (this.state.validated ? 'success' : 'failure') 이거 / false면 '' 빈값 */}
                {/* 그 안에서 this.state.validated가 true면 success 반환 / 아니면 failure반환 */}
                {/* 여기 안에는 jsx로 -> if문을 쓸 수 없어서 삼항연산자로 다 적어줌 */}
                <button onClick={this.handleButtonClick}>확인</button>
            </div>
        );
    }
}

export default RefClassSample;