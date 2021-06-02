import React from 'react'
// import { Quiz } from "../quiz.types";
import { quizzes } from "./data/quizDB"
import QuizCard from './components/QuizCard'


const Home = () => {

    return (
        <div style={{ display: "flex" }}>
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
        </div>
    )
}

export default Home
