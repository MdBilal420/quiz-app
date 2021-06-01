import { useQuiz } from '../context/quiz-context'
import { Quiz } from '../quiz.types'
import QuizQuestion from './QuizQuestion'
import {
    Container
} from "@chakra-ui/react"



const SelectedQuiz = ({ quiz }: { quiz: Quiz }) => {

    const { state } = useQuiz()

    return (
        <Container>
            <QuizQuestion question={quiz.questions[state.currentQuestionNumber]} />
        </Container>
    )
}

export default SelectedQuiz
