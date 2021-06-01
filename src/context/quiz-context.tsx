import React, { createContext, useContext, useReducer } from 'react';
import { State, Action, QuizContextTypes } from './quiz-context.types';


export const initialState: State = {
    score: 0,
    currentQuestionNumber: 0,
    selectedQuiz: null
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

const quizReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT_QUESTION_NUMBER":
            return {
                ...state,
                currentQuestionNumber: state.currentQuestionNumber + 1
            }
        case "SET_QUIZ":
            return {
                ...state,
                selectedQuiz: action.payload
            }
        default:
            return state
    }
}