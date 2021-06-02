import { useQuiz } from '../context/quiz-context'
import { Quiz } from '../quiz.types'
import QuizQuestion from './QuizQuestion'

const SelectedQuiz = ({ quiz }: { quiz: Quiz }) => {

    const { state } = useQuiz()

    return (
        <QuizQuestion question={quiz.questions[state.currentQuestionNumber]} />
    )
}

export default SelectedQuiz
