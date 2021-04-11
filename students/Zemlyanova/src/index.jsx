import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];



const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
};


const Button = (props) => {
    const handleClick = (event) => {
        alert('Нормально');
    };

    return <button style={{color: '#f00'}} onClick={handleClick}>{props.children}</button>;



};

ReactDOM.render(
    <>
    <MessageField messages={ messages } />
    <Button>My button</Button>

    </>,
    document.getElementById('root'),
);
