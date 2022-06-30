//rcc
import React, { Component } from 'react';

class RefInput extends Component {
    //ref생성
    input = React.createRef();
    //앞엔 그냥 이름임!!
    // abc = React.createRef();
    handleFocus = () => {
        // this.input.current.focus();
        // console.log(this.input.current);
        console.log(this.input.current.value);
        // console.log(this.abc.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.input} onChange={this.handleFocus} />
                {/* <input ref={this.abc} onChange={this.handleFocus} /> */}
            </div>
        );
    }
}

export default RefInput;