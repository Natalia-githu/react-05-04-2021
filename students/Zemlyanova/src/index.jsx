import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './containers/Router.jsx'
import initStore from './utils/store.js';


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

    <Provider store={ initStore() }>
    <BrowserRouter>
    <MuiThemeProvider>
        <Router />
    </MuiThemeProvider>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
