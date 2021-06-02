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
        <div style={{ margin: "20px" }}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={cover} alt={quizName} />
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    margin="1"
                >
                    {quizName}
                </Box>
                <Box margin="1">
                    Time:{"    "}
                    <Box as="span" margin="1" color="gray.600" fontSize="sm">
                        {playTime}
                    </Box>
                </Box>
                <Box margin="1">
                    Number of questions:{"    "}
                    <Box as="span" margin="1" color="gray.600" fontSize="sm">
                        {questions.length}
                    </Box>
                </Box>
                <Box as="button" borderRadius="md" margin="2" bg="dodgerblue" color="white" px={4} h={8}
                    onClick={() => startQuiz(quizId)}
                >
                    Start Quiz
            </Box>

            </Box>
        </div>
    )
}

export default QuizCard
