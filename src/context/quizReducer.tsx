
import { QuizStateTypes, QuizAction } from './quiz-context.types';

export const quizReducer = (state: QuizStateTypes, action: QuizAction): QuizStateTypes => {
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
        case "UPDATE_SCORE":
            return {
                ...state,
                score: state.score + action.payload
            }
        case "UPDATE_CORRECT":
            return {
                ...state,
                correct: state.correct + 1
            }
        case "UPDATE_INCORRECT":
            return {
                ...state,
                inCorrect: state.inCorrect + 1
            }

        case "RESET":
            return {
                ...state,
                score: 0,
                currentQuestionNumber: 0,
                selectedQuiz: null,
                correct: 0,
                inCorrect: 0
            }

        default:
            return state
    }
}