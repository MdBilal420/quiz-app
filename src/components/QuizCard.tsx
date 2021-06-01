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
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={cover} alt={quizName} />
            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
            >
                {quizName}
            </Box>
            <Box>
                Time:{"    "}
                <Box as="span" color="gray.600" fontSize="sm">
                    {playTime}
                </Box>
            </Box>
            <Box>
                Number of questions:{"    "}
                <Box as="span" color="gray.600" fontSize="sm">
                    {questions.length}
                </Box>
            </Box>
            <Box as="button" borderRadius="md" bg="dodgerblue" color="white" px={4} h={8}
                onClick={() => startQuiz(quizId)}
            >
                Start Quiz
            </Box>

        </Box>
    )
}

export default QuizCard
