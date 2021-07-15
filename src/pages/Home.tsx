import { quizzes } from "../data/quizDB"
import QuizCard from '../components/QuizCard'
import { Flex } from '@chakra-ui/react'


const Home = () => {


    return (
        <Flex wrap="wrap">
            {quizzes.quizList.map((quiz) => {
                return <QuizCard
                    key={quiz.quizId}
                    quizId={quiz.quizId}
                    quizName={quiz.quizName}
                    questions={quiz.questions}
                    playTime={quiz.playTime}
                    cover={quiz.cover}
                />
            })}
        </Flex>
    )
}

export default Home
