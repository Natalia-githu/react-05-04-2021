import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router.jsx'


// let messages = ['Привет', 'Как дела?'];
//
//
//
// const MessageComponent = (props) => <div>{props.text}</div>;
//
// const MessageField = (props) => {
//     return props.messages.map(message => <MessageComponent text={ message } />);
// };
//
//
// const Button = (props) => {
//     const handleClick = (event) => {
//         alert('Нормально');
//     };
//
//     return <button style={{color: '#f00'}} onClick={handleClick}>{props.children}</button>;
//
//
//
// };

// ReactDOM.render(
//     <>
//     <MessageField messages={ messages } />
//     <Button>My button</Button>
//
//     </>,
//     document.getElementById('root'),
// );
ReactDOM.render(


    <BrowserRouter>
    <MuiThemeProvider>
        <Router />
    </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
