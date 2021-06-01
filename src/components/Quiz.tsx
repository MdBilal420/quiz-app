import { useEffect } from 'react'
import { Text } from "@chakra-ui/react"
import { useParams } from 'react-router'
import { useQuiz } from '../context/quiz-context'
import { quizzes } from "../data/quizDB"
import SelectedQuiz from './SelectedQuiz'


const Quiz = () => {
    const { id } = useParams()
    const { state, dispatch } = useQuiz()


    useEffect(() => {
        const quiz = quizzes.quizList.find((quiz) => { return quiz.quizId === id })
        dispatch({ type: "SET_QUIZ", payload: quiz })
    }, [])


    return (
        <div>
            {state.selectedQuiz && state.selectedQuiz.questions[state.currentQuestionNumber]
                ? <SelectedQuiz quiz={state.selectedQuiz} /> : <Text>Quiz ENd</Text>}
        </div>

    )
}

export default Quiz
