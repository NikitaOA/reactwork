import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Message } from "./App";



const text = 'Введите';
const message = 'Сообщение';

ReactDOM.render(
  <React.StrictMode>
    <App text={text} />
    <Message message={message} />
  </React.StrictMode>,
  document.getElementById("root")
);