//rsc 엔터(화살표함수)
import React,{ useState, useRef } from 'react';

//함수형(함수표현식)
//이렇게 해도 되고! function을 이용해서 해도 됨!(함수 선언식)
const EventInput = (props) => {
    const input = useRef();
    const [form, setForm] = useState({
        username:"",                        //username:"", message:"", 초기값이 form에 담김
        message:"",
    })
    const { username, message } = form;
    const onChange = e => {
                    //하나라서 (e)안하고 괄호 생략해서 e만 적어줘도 됨!
        // const nextForm = {
        //     // username:"",         이렇게 해주는 거랑 ...form과 같음(값을 쭉 펼침!)              
        //     // message:"",
        //     ...form,                //기존의 form내용을 여기에 복사(spread구문 이용: ... 쓰면 스프레드구문-> 객체의 키를 쭉 펼침)->배열 펼치듯이 객체도 펼침 -> 이 값이 그대로 뿌려짐(username, message의 원래 값을 뿌려주는게)
        //     [e.target.name]: e.target.value         //원하는 값은 덮어 씌우기(원래있던 데이터의 불변성을 위해 이렇게 함)
        // }      
        // setForm(nextForm);

        //위에꺼랑 같은거임!!!
        //*객체 구조분해할당 -> name과 value 값을 받아라!
        const { name, value } = e.target;     
        setForm({
            ...form,                //https://parkjaeho.tistory.com/42 대괄호 표기법 /❤spread구문!❤
            [name]: value           //[대괄호] -> [name]해줘야 input의 name인 username과 message가 들어감! / {name} 해주면 문자열name그 자체가 들어감! 
        });
        //+)
        //form[name] = value;    기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다!
        //form.name
    }
    //버튼 클릭시 실행
    const onClick = () =>{
        console.log(`메세지는 ${message}이고 유저네임은 ${username}입니다.`);
        //초기값으로 reset되게!(확인 누르면 적어진 값이 input에서 제거)
        setForm({
           username:"",
           message:"", 
        });
        input.current.focus();
    }
    const onKeyPress = (e) =>{
        if(e.key === "Enter"){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" ref={input} name="username" value={username} onChange={onChange} onKeyPress={onKeyPress} />
            {/* 얘한테 focus 주고 싶어서(확인 누르고 나면 이 input창에 입력할 수 있게 자동으로 가있는거!focus!)  ref={input} */}
            <input type="text" name="message" value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
            {/* onClick이건 이벤트 이름 / 뒤에 {onClick}은 그냥 함수 이름(함수이름은 다른거 적어줘도 됨) */}
            {/* onChange이건 이벤트 이름 / 뒤에 {onChange}는 그냥 함수 이름(함수이름은 다른거 적어줘도 됨) */}
            {/* onKeyPress이건 이벤트 이름 / 뒤에 {onKeyPress}는 그냥 함수 이름(함수이름은 다른거 적어줘도 됨) */}
        </div>
    );
};

export default EventInput;