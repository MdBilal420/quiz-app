import React from 'react'
// import { Quiz } from "../quiz.types";
import {
    Container,
} from "@chakra-ui/react"
import { quizzes } from "./data/quizDB"
import QuizCard from './components/QuizCard'


const Home = () => {

    return (
        <Container>
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
        </Container>
    )
}

export default Home
