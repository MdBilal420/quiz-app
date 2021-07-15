import React, { createContext, useContext, useReducer } from 'react';
import { QuizStateTypes, QuizContextTypes } from './quiz-context.types';
import { quizReducer } from "./quizReducer"


export const initialState: QuizStateTypes = {
    score: 0,
    currentQuestionNumber: 0,
    selectedQuiz: null,
    correct: 0,
    inCorrect: 0
}


const QuizContext = createContext<QuizContextTypes>({} as QuizContextTypes)

export const QuizProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext)
}

