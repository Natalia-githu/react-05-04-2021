import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет! (bot)", "Как дела? (bot)"],


    };

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, 'Нормально (me)' ] });

    };
    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
            setTimeout(() =>
                    this.setState(
                        { messages: [ ...this.state.messages, 'Не приставай ко мне, я робот! (bot)' ] }),
                1000);
        }
    };


    render() {
        const messageElements = this.state.messages.map((text, index ) => (
            <Message key={ index } text={ text }  />));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
