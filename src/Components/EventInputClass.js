//rcc (react Component Class)  엔터
import React, { Component } from 'react';

//클래스형
class EventInputClass extends Component {
    //여기 안에는 javascript라서 다 적을 수 있음!
    state = {
        message: '',                             //message라는 애가 state로 값이 됨
        username: ''
    }
    handleChange = (e) => {
        this.setState({
            // message: e.target.value              //e.target -> 이벤트를 발생시킨 <input type="text" name="message" onChange={this.handleChange} />의 value값
            [e.target.name]: e.target.value         //이렇게 해주면 input의 name값으로(name="message" / name="message")으로 구분가능!! ->❤input이 여러개일 때, name으로 접근한다!❤
                                                    //❤[e.target.name]  이렇게해서 name으로 구분하고 각각 그 e.target의 값(value)를 부를거임!
        })
    }
    handleClick = () => {
        console.log(`메세지는 ${this.state.message}이고 유저네임은 ${this.state.username}입니다.`);
        this.setState({
            message:'',                      //확인버튼 누를 때, message reset되게!(''빈값)
            username:'',
        })
    }
    //키를 누르면 실행되는 함수
    handleKeyPress = (e) => {            
                    //어떤 키를 누르는지 알아야하니까 event를 받아야함
        console.log(e);
        if(e.key === "Enter"){
            this.handleClick();
        }
    }
    render() {
        return (
            // return안에 들어가는게 jsx구문이라서 if못쓰는거임(여기선 삼항연산자 써야함!) --> 위에는 javascript라서 if문 사용가능
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress} />
                {/* onChange : input의 값이 변경될 때 실행되는 이벤트 -> input에 내가 값을 입력하면 실행됨 */}
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;