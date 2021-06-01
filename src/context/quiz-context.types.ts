import React from "react"
import { Quiz } from "../quiz.types"


export type State = {
    score: number,
    currentQuestionNumber: number,
    selectedQuiz: Quiz | null
}

export type QuizContextTypes = {
    state: State,
    dispatch: React.Dispatch<any>
}

export type Action =
    | { type: "INCREMENT_QUESTION_NUMBER"; payload?: number }
    | { type: "SET_QUIZ"; payload: Quiz }


