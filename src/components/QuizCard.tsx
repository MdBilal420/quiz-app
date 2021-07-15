import React from 'react'
import {
    Box,
    Image
} from "@chakra-ui/react"
import { Quiz } from "../quiz.types";
import { useNavigate } from 'react-router';


const QuizCard = ({ quizId, quizName, questions, playTime, cover }: Quiz) => {

    const navigate = useNavigate()


    const startQuiz = (quizId: string) => {
        navigate(`/quiz/${quizId}`)
    }


    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={7} p={3} spacing={5}>
            <Image src={cover} alt={quizName} />
            <Box
                mt="1"
                fontWeight="bolder"
                as="h1"
                lineHeight="tight"
                isTruncated
                margin="1"
            >
                {quizName}
            </Box>
            <Box margin="1">
                Time:{"    "}
                <Box as="span" margin="1" color="gray.600" fontSize="md" fontWeight="bold">
                    {playTime}
                </Box>
            </Box>
            <Box margin="1">
                Number of questions:{"    "}
                <Box as="span" margin="1" color="gray.600" fontSize="md" fontWeight="bold">
                    {questions.length}
                </Box>
            </Box>
            <Box as="button" borderRadius="md" margin="2" bg="gray.800" color="white" px={5} h={10}
                onClick={() => startQuiz(quizId)}
            >
                Start Quiz
            </Box>

        </Box>
    )
}

export default QuizCard
