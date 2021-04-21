import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message.jsx';
import '../styles/styles.css';


export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
    };
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }


    componentDidUpdate() {
        if (this.state.messages.[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState(
                        { messages: [ ...this.state.messages, {text:'Не приставай ко мне, я робот!', sender:'bot'} ] }),
                1000);
        }
        this.textInput.current.scrollTop =
            this.textInput.current.scrollHeight - this.textInput.current.clientHeight;
    };

    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, {text: message, sender: 'me'} ],input: '', });

    };
    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };

    render() {
        const messageElements = this.state.messages.map((message, index ) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

        return <div className="layout">
        <div className='message-field'>
            { messageElements }
        </div>
            <div style={ { width: '100%', display: 'flex' } }>
                <TextField
                    ref={ this.textInput }
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        </div>

    }
}
