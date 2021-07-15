import React from "react"
import { Quiz } from "../quiz.types"

// Quiz Context Type

export type QuizStateTypes = {
    score: number,
    currentQuestionNumber: number,
    selectedQuiz: Quiz | null,
    correct: number,
    inCorrect: number
}


export type QuizContextTypes = {
    state: QuizStateTypes,
    dispatch: React.Dispatch<any>
}

export type QuizAction =
    | { type: "INCREMENT_QUESTION_NUMBER" }
    | { type: "SET_QUIZ"; payload: Quiz }
    | { type: "UPDATE_SCORE"; payload: number }
    | { type: "UPDATE_CORRECT" }
    | { type: "UPDATE_INCORRECT" }
    | { type: "RESET" }

// Auth Context Type

export type User = {
    username: string,
    email: string
}

export type AuthStateTypes = {
    user: User | null,
    isAuth: boolean,
    error: string | null
}

export type AuthContextTypes = {
    loginUser: (email: string, password: string) => any
    registerUser: (username: string, email: string, password: string) => any
    getAllScore: () => void,
    LogOut: () => void,
    saveScore: (username: string | undefined, genre: string | undefined, score: number | undefined) => any
    authDispatch: React.Dispatch<any>
    authState: AuthStateTypes
}

export type AuthAction =
    | { type: "SIGNUP", payload: any }
    | { type: "LOGIN"; payload: any }
    | { type: "LOGOUT" }
    | { type: "AUTH_FAIL" }
