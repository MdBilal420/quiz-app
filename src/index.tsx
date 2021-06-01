import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuizProvider } from './context/quiz-context';



ReactDOM.render(
  <React.StrictMode>

    <ChakraProvider>
      <BrowserRouter>
        <QuizProvider>
          <App />
        </QuizProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
