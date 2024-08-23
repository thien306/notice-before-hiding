import React, {Component} from 'react';

class Hello extends Component {
    componentWillUnmount() {
        alert('ngọc anh ơi anh yêu em');
    }

    render() {
        return <h1>yêu ngọc anh nhiều</h1>
    }
}

export default Hello;